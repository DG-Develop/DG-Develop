import React from "react";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      {console.log("Adentro del componente Home")}
      <main>
        <section>
          <div>
            <h1>Hi, I'm Full Stack Developer</h1>
            <p>
              Specialist in database management, API creation and web
              application designer.
            </p>

            <button>Go to Work</button>
          </div>
        </section>

        <section>
          <div>
            <div>
              <h3>Services I Offer</h3>
            </div>

            <div>
              <hr />
              <p>
                I can help you by offering the following services to create your
                innovative or business idea and grow it exponentially, in
                addition to handling large amounts of data and helping you
                decide on the information obtained from it.
              </p>
            </div>
          </div>
          <div>
            <div>
              <hr />
            </div>
            <div>
              <hr />
            </div>
            <div>
              <hr />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
