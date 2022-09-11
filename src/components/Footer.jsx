import React from "react";

const Footer = ({ Ref }) => {
  return (
    <footer className="footer"  ref={Ref}>
      <div>
        <span className="decoration-right"></span>
      </div>

      <div className="footer__content">
        <div className="content__info">
          <p>
            “Anyone can get mad... that's easy. But being angry at the right
            person, at the right intensity, at the right time, for the right
            reason, and in the right way... that's not easy.”
          </p>
          <p>Aristotle, Nicomanian Ethics</p>
        </div>

        <div>
          <span className="logo"></span>
        </div>
      </div>

      <div className="signature">
        <p>Make with <span>❤</span> by dgdevelop</p>
      </div>
    </footer>
  );
};

export default Footer;
