import React from "react";

function Header() {
  return (
    <div className="header">
      <h3 className="header__title">Zdeněk Kučera</h3>
      <ul className="header__nav">
        <li className="header__nav-item">Home</li>
        <li className="header__nav-item">About</li>
        <li className="header__nav-item">Projects</li>
        <li className="header__nav-item">Contacts</li>
      </ul>
    </div>
  );
}

export default Header;
