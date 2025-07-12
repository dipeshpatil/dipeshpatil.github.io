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

async function ghREST(path) {
  const res = await fetch(`https://api.github.com${path}`, {headers: HEADERS});
  if (!res.ok)
    throw new Error(`GitHub ${res.status} for ${path}: ${await res.text()}`);
  return res;
}

async function ghQL(query) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {...HEADERS, "Content-Type": "application/json"},
    body: JSON.stringify({query})
  });
  if (!res.ok) throw new Error(`GraphQL ${res.status}: ${await res.text()}`);
  return (await res.json()).data;
}

(async () => {
  /* ── 1. Profile ────────────────────────────────────────── */
  const profile = await ghREST(`/users/${USER}`).then(r => r.json());
  await fs.writeFile("./src/profile.json", JSON.stringify(profile, null, 2));
  console.log("✅ profile.json saved");

  /* ── 2. Repositories (REST with pagination) ────────────── */
  let repos = [];
  let url = `/users/${USER}/repos?per_page=100&sort=updated`;

  while (url) {
    const res = await ghREST(url);
    repos = repos.concat(await res.json());
    const link = res.headers.get("link");
    const next = link?.match(/<([^>]+)>;\s*rel="next"/);
    url = next ? next[1].replace("https://api.github.com", "") : null;
  }

  await fs.writeFile("./src/repos.json", JSON.stringify(repos, null, 2));
  console.log(`✅ repos.json saved (${repos.length} repos)`);

  /* ── 3. GitHub‑wide contribution stats (GraphQL) ───────── */
  const gql = await ghQL(`
    {
      viewer {
        contributionsCollection {
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
        }
        pullRequests { totalCount }
        issues       { totalCount }
      }
    }`);

  /* ── 4. Aggregate local repo‑based stats ───────────────── */
  const stats = {
    generatedAt: new Date().toISOString(),
    totalPublicRepos: repos.length,
    totalStars: 0,
    totalForks: 0,
    mostStarred: null,
    // GraphQL additions ↓
    totalCommitsLastYear:
      gql.viewer.contributionsCollection.totalCommitContributions,
    totalIssuesLastYear:
      gql.viewer.contributionsCollection.totalIssueContributions,
    totalPRsLastYear:
      gql.viewer.contributionsCollection.totalPullRequestContributions,
    lifetimePRs: gql.viewer.pullRequests.totalCount,
    lifetimeIssues: gql.viewer.issues.totalCount,
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

  /* ── 5. Language breakdown (REST /languages) ───────────── */
  const langTotals = {};
  for (const repo of repos.slice(0, 150)) {
    // cap to 150 repos
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

  /* ── 6. Save everything ────────────────────────────────── */
  await fs.writeFile("./src/stats.json", JSON.stringify(stats, null, 2));
  console.log("✅ stats.json saved");
})();
