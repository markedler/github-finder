import React from "react";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon ?? "fab fa-github"} /> {title ?? "Github Finder"}
      </h1>
    </nav>
  );
};

export default Navbar;
