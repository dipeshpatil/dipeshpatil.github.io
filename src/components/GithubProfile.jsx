import profile from "../data/profile.json";
import {motion} from "framer-motion";

const GithubProfile = () => {
  const {
    avatar_url,
    html_url,
    name,
    login,
    company,
    location,
    blog,
    public_repos,
    followers,
    following,
    hireable,
    bio
  } = profile;

  return (
    <section
      id="github-profile"
      className="gh-profile-glass relative w-full py-12 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-center px-6 md:px-10">
        <motion.a
          initial={{scale: 0.8, opacity: 0}}
          whileInView={{scale: 1, opacity: 1}}
          transition={{type: "spring", stiffness: 180, damping: 16}}
          viewport={{once: true}}
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="gh-profile-avatar"
        >
          <img
            src={avatar_url}
            alt={`${login} avatar`}
            className="w-full h-full object-cover"
          />
        </motion.a>

        <div className="gh-profile-info">
          <h2 className="text-3xl lg:text-4xl font-extrabold roboto-slab-hero flex flex-wrap gap-3 text-white">
            <span>{name}</span>
            <span className="gh-profile-handle">@{login}</span>
          </h2>

          {bio && (
            <p className="mt-4 text-base lg:text-lg font-medium text-slate-300 max-w-prose">
              {bio}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-4 text-sm lg:text-base font-medium text-slate-400">
            {company && <span>🏢 {company}</span>}
            {location && <span>📍 {location}</span>}
            {hireable && <span className="gh-profile-hireable">Hireable</span>}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            {[
              {label: "Repos", value: public_repos},
              {label: "Followers", value: followers},
              {label: "Following", value: following}
            ].map(s => (
              <div key={s.label} className="gh-profile-stat">
                <span className="text-2xl font-extrabold text-white">
                  {s.value}
                </span>
                <span className="text-xs mt-1 font-medium text-slate-400">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-profile-link"
            >
              GitHub Profile
            </a>
            {blog && (
              <a
                href={blog.startsWith("http") ? blog : `https://${blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gh-profile-link"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubProfile;
