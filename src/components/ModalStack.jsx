import React, { useEffect, useReducer } from "react";
import Modal from "./Modal";

import kotlin from "../assets/static/kotlin_icon.png";
import dart from "../assets/static/dart_icon.png";
import flutter from "../assets/static/flutter_icon.png";

import react from "../assets/static/react_icon.png";
import net from "../assets/static/net_icon.png";
import css from "../assets/static/css_icon.png";
import sass from "../assets/static/sass_icon.png";
import js from "../assets/static/js_icon.png";

import node from "../assets/static/node_icon.png";
import python from "../assets/static/python_icon.png";
import flask from "../assets/static/flask_icon.png";
import mssql from "../assets/static/mssql_icon.png";
import mongo from "../assets/static/mongo_icon.png";
import postgresql from "../assets/static/postgresql_icon.png";

const initialState = { listStack: [], classAnimation: "" };

function reducer(state, action) {
  switch (action.type) {
    case "API & Database":
      return {
        classAnimation: "api",
        listStack: [
          {
            name: "Node.js",
            extraInfo: "Bakend, Auth, Routes, API",
            icon: node,
          },
          {
            name: "Python",
            extraInfo: "Backend, Reports, Machine Learning",
            icon: python,
          },
          {
            name: "ASP.NET Core 6.0  Minimal API",
            extraInfo: "Backend, API, Auth, Routes",
            icon: net,
          },
          {
            name: "Mogodb",
            extraInfo: "Database, No Relational",
            icon: mongo,
          },
          {
            name: "SQL Server",
            extraInfo: "Database, Relational",
            icon: mssql,
          },
          {
            name: "Flask",
            extraInfo: "Backend, API",
            icon: flask,
          },
          {
            name: "Postgre SQL",
            extraInfo: "Database, Relational",
            icon: postgresql,
          },
        ],
      };
    case "Web Development":
      return {
        classAnimation: "web",
        listStack: [
          {
            name: "React",
            extraInfo: "Web, PWA, SPA",
            icon: react,
          },
          {
            name: "ASP.NET Core 6.0",
            extraInfo: "Web, PWA",
            icon: net,
          },
          {
            name: "CSS",
            extraInfo: "Web, Styles",
            icon: css,
          },
          {
            name: "SASS",
            extraInfo: "Web, Styles",
            icon: sass,
          },
          {
            name: "JS Vanilla",
            extraInfo: "Web",
            icon: js,
          },
        ],
      };
    case "Mobile Development":
    default:
      return {
        classAnimation: "mobile",
        listStack: [
          {
            name: "Kotlin",
            extraInfo: "Android",
            icon: kotlin,
          },
          {
            name: "Dart",
            extraInfo: "Android, IOs",
            icon: dart,
          },
          {
            name: "Flutter",
            extraInfo: "Android, IOs",
            icon: flutter,
          },
        ],
      };
  }
}

const ModalStack = ({ isOpen, title, OnCloseModal }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (title) {
      dispatch({ type: title });
      const element = document.querySelector(".modal__content-center")
      element.focus()
    }
  }, [title]);

  const hadleKeyDown = (e, type) => {
    if (e.key === "Enter" && type === "icon"){
      OnCloseModal()
    }

    if(e.key === "Escape" && type === "modal"){
      OnCloseModal()
    }
  }

  return (
    <Modal isOpen={isOpen}>
      <section className="modal__content-center" onKeyDown={(e) => hadleKeyDown(e, "modal")} tabIndex="0">
        <div className="card__carousel">
          <div className="carousel__header">
            <h2>{title}</h2>
            <span className="i_close" onClick={OnCloseModal} tabIndex="0" onKeyDown={(e) => hadleKeyDown(e, "icon")}></span>
          </div>

          <div className="carousel__animated">
            <div className={`slide ${state.classAnimation}`}>
              {state.listStack.map((dato, index) => (
                <div className="carousel__item" key={index}>
                  <img src={dato.icon} alt="" />
                  <div>
                    <p>{dato.name}</p>
                    <p>{dato.extraInfo}</p>
                  </div>
                </div>
              ))}
              {state.listStack.map((dato, index) => (
                <div className="carousel__item" key={index}>
                  <img src={dato.icon} alt="" />
                  <div>
                    <p>{dato.name}</p>
                    <p>{dato.extraInfo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default ModalStack;
