import React from "react";
const Header = () => {
  return (
    <div className="main-header">
      <nav className="nav main-nav">
        <ul>
          <li>
            <a ClassName="active" href="../home.js">
              Home
            </a>
          </li>
          <li>
            <a className="anchor" href="../about.js">
              About
            </a>
          </li>
          <li>
            <a href="../store.js">Store</a>
          </li>
        </ul>
      </nav>
      <h1 className="band-name band-name-large">The Generic</h1>
    </div>
  );
};

export default Header;
