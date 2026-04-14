import stats from "../data/stats.json";
import {motion} from "framer-motion";

const GithubStats = () => {
  const {
    totalPublicRepos,
    totalStars,
    totalForks,
    mostStarred,
    totalCommitsLastYear,
    totalIssuesLastYear,
    totalPRsLastYear,
    lifetimePRs,
    lifetimeIssues,
    lifetimeCommits,
    lifetimePRsOpened,
    lifetimeIssuesOpened,
    topLanguages,
    generatedAt
  } = stats;

  const keyMetrics = [
    {label: "Public Repos", value: totalPublicRepos},
    {label: "★ Stars", value: totalStars},
    {label: "Total Forks", value: totalForks},
    {label: "Commits (12 mo)", value: totalCommitsLastYear},
    {label: "PRs (12 mo)", value: totalPRsLastYear},
    {label: "Issues (12 mo)", value: totalIssuesLastYear}
  ];

  const lifetimeMetrics = [
    {label: "Lifetime PRs", value: lifetimePRs},
    {label: "Lifetime Issues", value: lifetimeIssues},
    {label: "Lifetime Commits", value: lifetimeCommits},
    {label: "PRs Opened", value: lifetimePRsOpened},
    {label: "Issues Opened", value: lifetimeIssuesOpened}
  ];

  return (
    <section
      id="github-stats"
      className="gh-stats-clay w-full mx-auto px-4 sm:px-8 md:px-10 py-12 text-typo mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight"
      >
        <span className="gh-stats-pill">GitHub Stats Snapshot</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-6 gap-6 mb-10">
        {[...keyMetrics, ...lifetimeMetrics].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{scale: 0.9, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{delay: i * 0.05, type: "spring", stiffness: 200}}
            viewport={{once: true}}
            className="gh-stats-metric"
          >
            <div className="text-4xl font-extrabold mb-2">{m.value}</div>
            <div className="text-sm sm:text-base font-medium">{m.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{type: "spring", stiffness: 220, damping: 18}}
        viewport={{once: true}}
        className="gh-stats-card mb-10"
      >
        <h3 className="text-xl font-bold mb-3">Most Starred Repository</h3>
        <a
          href={mostStarred.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-extrabold hover:underline"
        >
          {mostStarred.name}
        </a>
        <span className="gh-stats-star-badge">★ {mostStarred.stars}</span>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.1}}
        viewport={{once: true}}
        className="gh-stats-card"
      >
        <h3 className="text-xl font-bold mb-4">Top Languages (by bytes)</h3>
        <ul className="space-y-3">
          {topLanguages.map(lang => (
            <li key={lang.lang} className="flex items-center gap-4">
              <span className="w-32 font-semibold">{lang.lang}</span>
              <div className="gh-stats-bar-track">
                <div
                  className="gh-stats-bar-fill"
                  style={{
                    width: `${(lang.bytes / topLanguages[0].bytes) * 100}%`
                  }}
                />
              </div>
              <span className="min-w-[80px] text-right font-medium">
                {Math.round(lang.bytes / 1000)} KB
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      <p className="text-xs text-typo text-center mt-6">
        Generated at: {new Date(generatedAt).toLocaleString()}
      </p>
    </section>
  );
};

export default GithubStats;
