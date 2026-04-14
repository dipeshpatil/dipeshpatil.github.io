const Footer = () => {
  return (
    <footer className="footer-glass w-full text-center py-6">
      <p className="text-sm sm:text-base font-medium text-slate-400">
        <span>&copy;</span>
        <span>&nbsp;{new Date().getFullYear()}&nbsp;</span>
        <span className="footer-glass-brand roboto-slab-hero font-bold">
          DP28
        </span>{" "}
        &nbsp;— All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
