import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bars3Icon } from "@heroicons/react/24/solid";

import React, { useState } from "react";

function Header() {
  const [menuActive, setMenuActive] = useState("header__mobile-nav");

  const menuOpen = () => {
    menuActive === "header__mobile-nav"
      ? setMenuActive("header__mobile-nav header__mobile-nav--active")
      : setMenuActive("header__mobile-nav");
  };

  return (
    <div className="header">
      <a className="header__title-link" href="#home">
        <h2 className="header__title">Zdenek Kucera</h2>
      </a>
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
      <div className="header__mobile-menu" onClick={menuOpen}>
        <i className="header__hamburger">
          {/* <Bars3Icon className="header__hamburger-icon" /> */}
          <FontAwesomeIcon className="header__hamburger-icon" icon={faBars} />
        </i>
        <div className={menuActive}>
          <FontAwesomeIcon
            onClick={menuOpen}
            className="header__mobile-nav-exit"
            icon={faXmark}
          />
          <div className="header__mobile-nav-container">
            <ul className="header__mobile-nav-list">
              <li className="header__mobile-nav-item">
                <a
                  onClick={menuOpen}
                  className="header__mobile-nav-link"
                  href="#home"
                  rel="noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="header__mobile-nav-item">
                <a
                  onClick={menuOpen}
                  className="header__mobile-nav-link"
                  href="#about"
                  rel="noreferrer"
                >
                  About
                </a>
              </li>
              <li className="header__mobile-nav-item">
                <a
                  onClick={menuOpen}
                  className="header__mobile-nav-link"
                  href="#projects"
                  rel="noreferrer"
                >
                  Projects
                </a>
              </li>
              <li className="header__mobile-nav-item">
                <a
                  onClick={menuOpen}
                  className="header__mobile-nav-link"
                  href="#contacts"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
