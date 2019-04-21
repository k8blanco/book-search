import React from "react";
require("./style.css")

function Nav() {
  return (
    <nav>
    <div className="nav-wrapper z-depth-3">
      <a href="/" className="brand-logo">Google Book Search</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/books/saved">Saved</a></li>
      </ul>
    </div>
    </nav>
  );
}

export default Nav;
