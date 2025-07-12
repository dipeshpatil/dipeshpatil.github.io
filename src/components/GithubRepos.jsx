import repos from "../data/repos.json";
import {motion} from "framer-motion";

const TWELVE_MONTHS_MS = 1000 * 60 * 60 * 24 * 30 * 12; // 12 months in milliseconds
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
      className="w-full mx-auto px-4 sm:px-8 md:px-10 py-12 bg-primary text-typo border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)] mt-4"
    >
      <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 250, damping: 20}}
        viewport={{once: true}}
        className="text-3xl sm:text-4xl font-extrabold mb-8 tracking-tight"
      >
        <span className="inline-block bg-accent px-4 py-2 border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] rounded-none">
          Featured Repositories
        </span>
      </motion.h2>

      {curated.length === 0 && (
        <p className="text-center text-typo text-lg">
          No recent or high‑star repositories found.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {curated.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: index * 0.05, type: "spring", stiffness: 200}}
            viewport={{once: true}}
            className="border-4 border-black bg-secondary rounded-none p-0 shadow-[6px_6px_0_rgba(0,0,0,1)] overflow-hidden"
          >
            {/* Top accent bar */}
            <div className="h-3 w-full bg-edge" />

            {/* Inner content */}
            <div className="p-6 flex flex-col h-full justify-between">
              {/* Repo header */}
              <div>
                <h3 className="text-xl font-extrabold mb-1 roboto-slab-hero">
                  <a
                    href={
                      repo.html_url ?? `https://github.com/${repo.full_name}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {repo.name}
                  </a>
                </h3>
                {repo.description && (
                  <p className="text-sm sm:text-base text-typo mb-4 line-clamp-3">
                    {repo.description}
                  </p>
                )}
              </div>

              {/* Footer chips */}
              <ul className="flex flex-wrap gap-3 text-xs sm:text-sm font-medium mt-auto pt-4 border-t-4 border-black">
                {repo.language && (
                  <li className="px-3 py-1 bg-primary border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] rounded-none uppercase">
                    {repo.language}
                  </li>
                )}
                {typeof repo.stargazers_count === "number" && (
                  <li className="px-3 py-1 bg-primary text-black border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] rounded-none">
                    ★ {repo.stargazers_count}
                  </li>
                )}
                {Date.now() - new Date(repo.pushed_at).getTime() <
                  TWELVE_MONTHS_MS && (
                  <li className="px-3 py-1 bg-lime-300 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)] rounded-none">
                    New
                  </li>
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
