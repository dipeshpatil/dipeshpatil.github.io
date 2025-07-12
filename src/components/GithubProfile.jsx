import profile from "../profile.json";
import {motion} from "framer-motion";

/* ----------------------------------------------------------
   Ultra‑Neubrutalist GitHub Profile Banner with Animated Grid
   ---------------------------------------------------------- */

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
      className="relative w-full bg-gradient-to-br from-primary via-secondary to-accent py-16 overflow-hidden border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)] mt-4"
    >
      {/* Skewed background stripes */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]">
        <div className="absolute -top-1/2 left-0 w-full h-full rotate-6 bg-repeat-x [background-size:120px_8px] [background-image:linear-gradient(90deg,theme(colors.black)_50%,transparent_50%)] opacity-10" />
      </div>

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 items-center px-6 md:px-12">
        {/* Avatar with pulse ring */}
        <motion.a
          initial={{scale: 0.8, opacity: 0}}
          whileInView={{scale: 1, opacity: 1}}
          transition={{type: "spring", stiffness: 180, damping: 16}}
          viewport={{once: true}}
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-52 h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-black shadow-[6px_6px_0_#000] mx-auto lg:mx-0"
        >
          <img
            src={avatar_url}
            alt={`${login} avatar`}
            className="w-full h-full object-cover "
          />
          <span className="absolute inset-0 rounded-full border-4 border-edge animate-ping opacity-20" />
        </motion.a>

        {/* Info card */}
        <div className="relative bg-primary border-4 border-black shadow-[6px_6px_0_#000] p-8 lg:p-10">
          {/* Decorative corner */}
          <span className="absolute -top-4 -left-4 w-8 h-8 bg-accent border-4 border-black rotate-12" />

          {/* Name + handle */}
          <h2 className="text-4xl lg:text-5xl font-extrabold roboto-slab-hero flex flex-wrap gap-3">
            <span className="">{name}</span>
            <span className="text-xl mt-0 lg:text-2xl font-medium skill-brand">
              @{login}
            </span>
          </h2>

          {bio && (
            <p className="mt-4 text-base lg:text-lg font-medium text-typo max-w-prose">
              {bio}
            </p>
          )}

          {/* Meta row */}
          <div className="mt-2 flex flex-wrap gap-4 text-sm lg:text-base font-semibold text-typo">
            {company && <span>🏢 {company}</span>}
            {location && <span>📍 {location}</span>}
            {hireable && (
              <span className="px-3 py-0.5 -mt-1 bg-green-400 border-2 border-black shadow-[2px_2px_0_#000] text-black uppercase tracking-wide">
                Hireable
              </span>
            )}
          </div>

          {/* Stats grid */}
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            {[
              {label: "Repos", value: public_repos},
              {label: "Followers", value: followers},
              {label: "Following", value: following}
            ].map(s => (
              <div
                key={s.label}
                className="bg-secondary border-4 border-black px-4 py-5 shadow-[4px_4px_0_#000] flex flex-col items-center rounded-none"
              >
                <span className="text-3xl font-extrabold">{s.value}</span>
                <span className="text-xs mt-1 font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black px-6 py-2 border-2 border-black rounded-none shadow-[3px_3px_0_#000] hover:-translate-y-1 transition-transform font-bold"
            >
              GitHub Profile
            </a>
            {blog && (
              <a
                href={blog.startsWith("http") ? blog : `https://${blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-black px-6 py-2 border-2 border-black rounded-none shadow-[3px_3px_0_#000] hover:-translate-y-1 transition-transform font-bold"
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
