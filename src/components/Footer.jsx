const Footer = () => {
  return (
    <footer className="footer-clay relative w-full text-center py-6 text-typo">
      <div className="footer-clay-blob footer-clay-blob--lg hidden sm:block" />
      <div className="footer-clay-blob footer-clay-blob--sm hidden sm:block" />

      <p className="text-sm sm:text-base font-medium">
        <span>&copy;</span>
        <span>&nbsp;{new Date().getFullYear()}&nbsp;</span>
        <span className="footer-clay-brand roboto-slab-hero font-bold">
          DP28
        </span>{" "}
        &nbsp;— All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
