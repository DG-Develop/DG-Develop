import React, { useEffect, useRef, useState } from "react";
import TonalButtonWithIcon from "../widgets/TonalButtonWithIcon";

import gecon from "../assets/static/Gecon.png";
import geconContractList from "../assets/static/Gecon_Contract_List.png";
import geconEmployeeList from "../assets/static/Gecon_Employee_List.png";
import geconGenerateContracts from "../assets/static/Gecon_Generate_Contracts.png";
import geconUpdateContract from "../assets/static/Gecon_Update_Contract.png";
import geconAddSignature from "../assets/static/Gecon_Add_Signature.png";
import { Link } from "react-router-dom";
import useObserver from "../hooks/useObserver";
import ModalImage from "../components/ModalImage";
import { useAppSelector } from "../app/hooks";

const WorkInfo = () => {
  const work = useAppSelector(({ workEstado }) => workEstado.workSelect);

  const infoDescrip = useRef(null);
  const [isOpenModalImage, setIsOpenModalImage] = useState(false);

  const [observer, setElements, entries] = useObserver({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    const targets = document.querySelectorAll(".description__work-item");

    setElements(targets);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.classList.add("fadeInDown");
        observer.unobserve(element);
      }
    });
  }, [entries, observer]);

  const handleMainToDesc = () => {
    infoDescrip.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenModalImage = () => {
    setIsOpenModalImage(true);
  };

  const handleCloseModalImage = () => {
    setIsOpenModalImage(false);
  };

  return (
    <main className="info__container">
      <section className="info__about">
        <div className="sticky__header">
          <span className="i_back">
            <Link to="/work"></Link>
          </span>
          <h1>{work.title}</h1>
        </div>

        <div className="info__content">
          <p>{work.subtitle}</p>
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
            onClick={handleMainToDesc}
          />
        </div>

        <div className="info__image--main">
          <img
            src={gecon}
            alt="image home of proyect GECON"
            onClick={handleOpenModalImage}
          />
        </div>
      </section>

      <section className="info__description" ref={infoDescrip}>
        <div className="description__work-item">
          <div className="work-item__header">
            <h4>Home</h4>
            <img src={gecon} alt="image home of proyect GECON" />
          </div>
          <div className="work-item__content">
            <p>
              Download a single contract or many. <br /> To download a single
              contract, write the contract folio dynamically or manual. <br />
              To download many contracts, choose year, period (Semi-annual,
              Quarterly, Monthly, Biweekly or by Day) and finally choose the
              government dependency. <br />
              See download progress and you can cancel it while the operation is
              active.
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
              See all contracts and also update it and delete it. <br />
              Also you can search any contract, writing the name, DNI, contract
              folio and number employee.
            </p>
          </div>
        </div>

        <div className="description__work-item">
          <div className="work-item__header">
            <h4>Employee List</h4>
            <img src={geconEmployeeList} alt="image home of proyect GECON" />
          </div>
          <div className="work-item__content">
            <p>
              Control the staff and signatories and see you partial information.
              Also you can search to employee or signers by name, DNI and number
              of employee. Control the staff and signatories and see you partial
              information. <br /> Also you can search to employee or signers by
              name, DNI and number of employee.
            </p>
          </div>
        </div>

        <div className="description__work-item invert">
          <div className="work-item__header">
            <h4>Generate Contracts</h4>
            <img
              src={geconGenerateContracts}
              alt="image home of proyect GECON"
            />
          </div>
          <div className="work-item__content">
            <p>
              Generate multiple contracts by government dependency, choose
              contract duration and then choose the signatories (Max. 3 and Min.
              2 depending on government dependency) and finally choose staff to
              generate contract or contracts. <br /> This process save it for
              choose another government dependency and generate multiple
              contracts to one click.
            </p>
          </div>
        </div>

        <div className="description__work-item">
          <div className="work-item__header">
            <h4>Update Contract</h4>
            <img src={geconUpdateContract} alt="image home of proyect GECON" />
          </div>
          <div className="work-item__content">
            <p>
              Update contracts, change the duration, government dependency or
              position as long as the contract has not been signed.
            </p>
          </div>
        </div>

        <div className="description__work-item invert">
          <div className="work-item__header">
            <h4>Add signers</h4>
            <img src={geconAddSignature} alt="image home of proyect GECON" />
          </div>
          <div className="work-item__content">
            <p>
              Add new signers, choose by government dependency, then write or
              choose you position and indicate the order to sig.
            </p>
          </div>
        </div>
      </section>

      <ModalImage
        isOpen={isOpenModalImage}
        OnCloseModal={handleCloseModalImage}
      />
    </main>
  );
};

export default WorkInfo;
