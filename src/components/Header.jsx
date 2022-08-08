import React from "react";
import '../assets/components/Header.scss';
import '../assets/Icons.scss';

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <span className="logo"></span>
        <div>
          <object data="image/svg" type="image+svg" ></object>
          <span className="i_menu"></span>
        </div>
        <li>
          <ul>Home</ul>
          <ul>About</ul>
        </li>
        <li>
          <ul>Work</ul>
          <ul>Contact</ul>
        </li>
        <li>
          <ul>
            <a href="https://twitter.com/DGDevelop">
              <span className="i_twitter"></span>
            </a>
          </ul>
          <ul>
            <a href="https://github.com/DG-Develop">
              <span className="i_github"></span>
            </a>
          </ul>
        </li>
      </nav>
    </header>
  );
};
