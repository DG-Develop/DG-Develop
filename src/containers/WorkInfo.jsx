import React from "react";
import TonalButtonWithIcon from "../widgets/TonalButtonWithIcon";

import gecon from "../assets/static/Gecon.png";
import geconContractList from "../assets/static/Gecon_Contract_List.png";
import geconEmployeeList from "../assets/static/Gecon_Employee_List.png";
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
              The principal page contains two sections for download of
              contracts. <br /> The first of them, download an individual
              contract by folio and this section you can choose the download
              method by dynamic or manual. <br /> The second section you can
              download multiple contracts by government dependecies, you choose
              the year and period (Semi-annual, Quarterly, Monthly, Biweekly or
              by Day) and then you choose te government dependecie. <br /> The
              section next to downloads section is about downloads progress list
              and you can cancel it while the operation is active.
            </p>
          </div>
        </div>

        <div className="description__work-item invert">
          <div className="work-item__header">
            <h4>Contract List</h4>
            <img src={geconContractList} alt="image home of proyect GECON" />
          </div>
          <div className="work-item__content">
            <p>
              You can see all contracts and also update it and delete it. <br />
              Also you can search any contract, writing the name, DNI, contract
              folio and number employee. <br /> And the last action you can add
              contract and this redirect to contract form
            </p>
          </div>
        </div>

        <div className="description__work-item">
          <div className="work-item__header">
            <h4>Employee Lis</h4>
            <img src={geconEmployeeList} alt="image home of proyect GECON" />
          </div>
          <div className="work-item__content">
            <p>
              In this page you see two sections the first of them is about
              contract staff and you can see employee information and search by
              name, DNI and number employee. <br /> In the second section you
              can see all about the signatories who will have the task of
              signing the staff contracts also you can search for it by the
              filters of the previous section.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkInfo;
