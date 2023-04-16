import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">check out my socials to the right :D</p>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/aaron-adams-50627211b/" className="footer__social-link">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a href="https://github.com/aaronadams62" className="footer__social-link">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;