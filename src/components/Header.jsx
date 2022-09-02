import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import triangle from "../assets/static/rectangle_header.svg";
import ModalMenu from "./ModalMenu";

export const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const menuDinamic = useRef(null);

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const handleOpenModalMenu = () => {
    changeClassMenuDinamic();

    setOpenMenuMobile(!openMenuMobile);
  };

  const changeClassMenuDinamic = () => {
    const element = menuDinamic.current.classList;

    if (!openMenuMobile) {
      element.add("animation-circle");
    } else {
      element.remove("animation-circle");
    }
  };

  return (
    <header className="header">
      <nav>
        <div>
          <span className="logo"></span>
        </div>

        {!isDesktop && (
          <div
            className="hamburguer__menu"
            onClick={handleOpenModalMenu}
            ref={menuDinamic}
          >
            <object data={triangle} type="image/svg+xml"></object>
            <svg
              id="menu-icon"
              width="26"
              height="20"
              strokeWidth="3"
              viewBox="0 0 20 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5H21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {openMenuMobile && <ModalMenu />}
          </div>
        )}
        <div className="menu">
          <li>
            <ul>Home</ul>
            <ul>About</ul>
          </li>
          <li>
            <ul>Work</ul>
            <ul>Contact</ul>
          </li>
        </div>
        <div className="social-media">
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
        </div>
      </nav>
    </header>
  );
};
