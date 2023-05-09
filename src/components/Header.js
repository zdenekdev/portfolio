import React from "react";

function Header() {
  return (
    <div className="header">
      <h3 className="header__title">Zdeněk Kučera</h3>
      <ul className="header__nav">
        <li>
          <a className="header__nav-item" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="header__nav-item" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="header__nav-item" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="header__nav-item" href="#contacts">
            Contacts
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
