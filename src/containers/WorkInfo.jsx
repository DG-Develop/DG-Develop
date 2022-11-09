import React from "react";
import TonalButtonWithIcon from "../widgets/TonalButtonWithIcon";

import gecon from "../assets/static/Gecon.png";
import { Link } from "react-router-dom";

const WorkInfo = () => {
  return (
    <main className="info__container">
      <section className="info__about">
        <div className="sticky__header">
          <span className="i_back">
            <Link to="/work"></Link>{" "}
          </span>
          <h1>GECON</h1>
        </div>

        <div className="info__content">
          <p>Contract generator</p>
          <p>
            PWA application for generate fixed-terms contracts for the payroll
            personal of Human Resources department with the final porpuse we
            have the presupuestal control and personal analysis that has been
            hired by this means.
          </p>
        </div>

        <div className="info__action">
          <TonalButtonWithIcon
            id="btn-see-more"
            name="See more"
            icon="i_arrow-down"
            type="button"
            classBtnColor="tonal-button-primary"
          />
        </div>

        <div className="info__image--main">
          <img src={gecon} alt="image home of proyect GECON" />
        </div>
      </section>

      <section className="info__description">
        <div className="description__work-item">
          <div className="work-item__header">
            <h4>Home</h4>
            <img src={gecon} alt="image home of proyect GECON" />
          </div>
          <div className="work-item__content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus sit
              amet rutrum suspendisse. Libero consequat, ante hac risus.
              Parturient scelerisque tempor, lobortis vestibulum, sed
              scelerisque massa tincidunt. Ut quis fermentum vitae volutpat
              auctor facilisis.
            </p>
          </div>
        </div>

        <div className="description__work-item invert">
          <div className="work-item__header">
            <h4>Employee List</h4>
            <img src={gecon} alt="image home of proyect GECON" />
          </div>
          <div className="work-item__content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus sit
              amet rutrum suspendisse. Libero consequat, ante hac risus.
              Parturient scelerisque tempor, lobortis vestibulum, sed
              scelerisque massa tincidunt. Ut quis fermentum vitae volutpat
              auctor facilisis.
            </p>
          </div>
        </div>

        <div className="description__work-item">
          <div className="work-item__header">
            <h4>Contract List</h4>
            <img src={gecon} alt="image home of proyect GECON" />
          </div>
          <div className="work-item__content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus sit
              amet rutrum suspendisse. Libero consequat, ante hac risus.
              Parturient scelerisque tempor, lobortis vestibulum, sed
              scelerisque massa tincidunt. Ut quis fermentum vitae volutpat
              auctor facilisis.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkInfo;
