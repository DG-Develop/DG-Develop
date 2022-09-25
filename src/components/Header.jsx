import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import triangle from "../assets/static/rectangle_header.svg";
import ModalMenu from "./ModalMenu";

export const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const navigate = useNavigate();

  const handleOpenModalMenu = () => {
    setOpenMenuMobile(true);
  };

  const handleCloseModalMenu = () => {
    setOpenMenuMobile(!openMenuMobile);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <nav>
        <div>
          <span className="logo" onClick={goToHome}></span>
        </div>

        {!isDesktop ? (
          <div className="hamburguer__menu" onClick={handleOpenModalMenu}>
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
          </div>
        ) : (
          <div className="menu">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
            </ul>
            <ul>
              <li><Link to="/">WORK</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
        )}

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
      {openMenuMobile && <ModalMenu OnCloseModal={handleCloseModalMenu} />}
    </header>
  );
};
