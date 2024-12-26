const Footer = () => {
  return (
    <footer className="p-4 bg-primary text-center">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="skill-dp28 roboto-slab-hero">DP28</span> All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
