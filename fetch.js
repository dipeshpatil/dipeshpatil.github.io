import fs from "fs/promises";
import process from "process";
import "dotenv/config";

const USER = process.env.VITE_APP_GITHUB_USERNAME;
const TOKEN = process.env.VITE_APP_GITHUB_TOKEN;

if (!USER || !TOKEN) {
  console.error(
    "❌  Missing VITE_APP_GITHUB_USERNAME or VITE_APP_GITHUB_TOKEN"
  );
  process.exit(1);
}

const HEADERS = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: "application/vnd.github+json",
  "User-Agent": USER
};

const ghREST = async path => {
  const r = await fetch(`https://api.github.com${path}`, {headers: HEADERS});
  if (!r.ok) throw new Error(`${r.status} ${path}: ${await r.text()}`);
  return r;
};

const ghQL = async query => {
  const r = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {...HEADERS, "Content-Type": "application/json"},
    body: JSON.stringify({query})
  });
  if (!r.ok) throw new Error(`GraphQL ${r.status}: ${await r.text()}`);
  return (await r.json()).data;
};

/* ── helper: lifetime counts via yearly slices ──────────── */
async function getLifetimeContributionCounts(createdAtIso) {
  const firstYear = new Date(createdAtIso).getUTCFullYear();
  const thisYear = new Date().getUTCFullYear();

  const totals = {commits: 0, issues: 0, prs: 0};

  for (let y = firstYear; y <= thisYear; y++) {
    const from = `${y}-01-01T00:00:00Z`;
    const to = `${y}-12-31T23:59:59Z`;

    const data = await ghQL(`
      { user(login:"${USER}") {
          contributionsCollection(from:"${from}", to:"${to}") {
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
          }
      }}`);

    const c = data.user.contributionsCollection;
    totals.commits += c.totalCommitContributions;
    totals.issues += c.totalIssueContributions;
    totals.prs += c.totalPullRequestContributions;
  }
  return totals;
}

(async () => {
  /* 1. Profile ------------------------------------------------ */
  const profile = await ghREST(`/users/${USER}`).then(r => r.json());
  await fs.writeFile("./src/profile.json", JSON.stringify(profile, null, 2));
  console.log("✅ profile.json saved");

  /* 2. Repos (REST, paginated) -------------------------------- */
  let repos = [];
  let url = `/users/${USER}/repos?per_page=100&sort=updated`;

  while (url) {
    const r = await ghREST(url);
    repos = repos.concat(await r.json());
    const nxt = r.headers.get("link")?.match(/<([^>]+)>;\s*rel="next"/);
    url = nxt ? nxt[1].replace("https://api.github.com", "") : null;
  }
  await fs.writeFile("./src/repos.json", JSON.stringify(repos, null, 2));
  console.log(`✅ repos.json saved (${repos.length} repos)`);

  /* 3. Past‑year contribution snapshot ------------------------ */
  const snap = await ghQL(`
    { viewer {
        contributionsCollection {
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
        }
        pullRequests { totalCount }
        issues       { totalCount }
    }}`);

  /* 4. Lifetime counts ---------------------------------------- */
  const life = await getLifetimeContributionCounts(profile.created_at);

  /* 5. Aggregate repo‑based stats ----------------------------- */
  const stats = {
    generatedAt: new Date().toISOString(),
    totalPublicRepos: repos.length,
    totalStars: 0,
    totalForks: 0,
    mostStarred: null,

    /* Past‑year snapshot */
    totalCommitsLastYear:
      snap.viewer.contributionsCollection.totalCommitContributions,
    totalIssuesLastYear:
      snap.viewer.contributionsCollection.totalIssueContributions,
    totalPRsLastYear:
      snap.viewer.contributionsCollection.totalPullRequestContributions,

    /* Lifetime via yearly slices */
    lifetimeCommits: life.commits,
    lifetimeIssues: life.issues,
    lifetimePRs: life.prs,

    /* GitHub‑wide lifetime counts GitHub gives directly */
    lifetimePRsOpened: snap.viewer.pullRequests.totalCount,
    lifetimeIssuesOpened: snap.viewer.issues.totalCount,

    topLanguages: []
  };

  for (const repo of repos) {
    stats.totalStars += repo.stargazers_count;
    stats.totalForks += repo.forks_count;
    if (!stats.mostStarred || repo.stargazers_count > stats.mostStarred.stars) {
      stats.mostStarred = {
        name: repo.name,
        stars: repo.stargazers_count,
        html_url: repo.html_url
      };
    }
  }

  /* 6. Languages --------------------------------------------- */
  const langTotals = {};
  for (const repo of repos.slice(0, 150)) {
    const langs = await ghREST(`/repos/${USER}/${repo.name}/languages`).then(
      r => r.json()
    );
    for (const [lang, bytes] of Object.entries(langs)) {
      langTotals[lang] = (langTotals[lang] || 0) + bytes;
    }
  }
  stats.topLanguages = Object.entries(langTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([lang, bytes]) => ({lang, bytes}));

  /* 7. Save --------------------------------------------------- */
  await fs.writeFile("./src/stats.json", JSON.stringify(stats, null, 2));
  console.log("✅ stats.json saved");
})();
