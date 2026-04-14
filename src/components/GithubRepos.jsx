import repos from "../data/repos.json";
import {motion} from "framer-motion";

const TWELVE_MONTHS_MS = 1000 * 60 * 60 * 24 * 30 * 12;
const STAR_THRESHOLD = 20;

const GithubRepos = () => {
  const curated = repos.filter(repo => {
    if (repo.private) return false;
    const pushed = new Date(repo.pushed_at).getTime();
    const isRecent = Date.now() - pushed < TWELVE_MONTHS_MS;
    const isPopular = (repo.stargazers_count ?? 0) >= STAR_THRESHOLD;
    return isRecent || isPopular;
  });

  return (
    <section
      id="github-repos"
      className="gh-repos-glass w-full mx-auto px-6 sm:px-8 md:px-10 py-10"
    >
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}
      >
        <span className="glass-pill mb-4 inline-block">Open Source</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 tracking-tight text-white">
          Featured Repositories
        </h2>
      </motion.div>

      {curated.length === 0 && (
        <p className="text-center text-slate-400 text-lg">
          No recent or high-star repositories found.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {curated.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: index * 0.05, duration: 0.4}}
            viewport={{once: true}}
            className="gh-repo-card"
          >
            <div className="gh-repo-accent-bar" />

            <div className="p-5 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1 text-white">
                  <a
                    href={
                      repo.html_url ?? `https://github.com/${repo.full_name}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-violet-400 transition-colors"
                  >
                    {repo.name}
                  </a>
                </h3>
                {repo.description && (
                  <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                    {repo.description}
                  </p>
                )}
              </div>

              <ul className="flex flex-wrap gap-2 text-xs font-medium mt-auto pt-4 gh-repo-footer">
                {repo.language && (
                  <li className="gh-repo-chip uppercase">{repo.language}</li>
                )}
                {typeof repo.stargazers_count === "number" && (
                  <li className="gh-repo-chip">★ {repo.stargazers_count}</li>
                )}
                {Date.now() - new Date(repo.pushed_at).getTime() <
                  TWELVE_MONTHS_MS && (
                  <li className="gh-repo-chip gh-repo-chip--new">New</li>
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GithubRepos;
