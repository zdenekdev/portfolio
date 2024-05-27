import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__copyright">
            <h3 className="footer__copyright-text">© {year} Zdenek Kucera</h3>
          </div>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/kucerazdenek/"
              target="_blank"
              rel="noreferrer">
              <i>
                <FontAwesomeIcon
                  className="footer__in-icon"
                  icon={faLinkedin}
                />
              </i>
            </a>
            <a
              href="https://github.com/zdenekdev"
              target="_blank"
              rel="noreferrer">
              <i>
                <FontAwesomeIcon
                  className="footer__github-icon"
                  icon={faGithub}
                />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
