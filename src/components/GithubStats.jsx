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
      className="gh-stats-glass w-full mx-auto px-6 sm:px-8 md:px-10 py-10"
    >
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
      >
        <span className="glass-pill mb-4 inline-block">Analytics</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-tight text-white">
          GitHub Stats Snapshot
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[...keyMetrics, ...lifetimeMetrics].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{scale: 0.9, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            transition={{delay: i * 0.04, duration: 0.3}}
            viewport={{once: true}}
            className="gh-stats-metric"
          >
            <div className="text-3xl font-extrabold mb-1 text-white">
              {m.value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-400">
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.4}}
        viewport={{once: true}}
        className="gh-stats-card mb-6"
      >
        <h3 className="text-lg font-bold mb-3 text-white">
          Most Starred Repository
        </h3>
        <a
          href={mostStarred.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-extrabold hover:text-violet-400 transition-colors text-white"
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
        <h3 className="text-lg font-bold mb-4 text-white">
          Top Languages (by bytes)
        </h3>
        <ul className="space-y-3">
          {topLanguages.map(lang => (
            <li key={lang.lang} className="flex items-center gap-4">
              <span className="w-28 font-semibold text-sm text-slate-300">
                {lang.lang}
              </span>
              <div className="gh-stats-bar-track">
                <div
                  className="gh-stats-bar-fill"
                  style={{
                    width: `${(lang.bytes / topLanguages[0].bytes) * 100}%`
                  }}
                />
              </div>
              <span className="min-w-[70px] text-right font-medium text-sm text-slate-400">
                {Math.round(lang.bytes / 1000)} KB
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      <p className="text-xs text-slate-500 text-center mt-6">
        Generated at: {new Date(generatedAt).toLocaleString()}
      </p>
    </section>
  );
};

export default GithubStats;
