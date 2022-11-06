import React from "react";

import gecon from "../assets/static/Gecon.png";

const WorkInfo = () => {
  return (
    <main className="info__container">
      <section className="info__about">
        <div className="sticky__header">
          <span className="i_back"></span>
          <h1>GECON</h1>
        </div>

        <div className="info__content">
          <p>Contract generator</p>
          <p>
            Aplicación PWA para generar contratos por tiempo determinado al
            personal de nómina para el departamento de Recursos Humanos con el
            fin de tener un control presupuestal y análisis del personal que ha
            sido contratado por este medio.
          </p>
        </div>

        {/* TODO: Widget Button Icon */}

        <div className="info__image--main">
          <img src={gecon} alt="image home of proyect GECON" />
        </div>
      </section>

      <section className="info__description">
        <div>
          <div>
            <h4>Home</h4>
            <img src={gecon} alt="image home of proyect GECON" />
          </div>
          <div>
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
