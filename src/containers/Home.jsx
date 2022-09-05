import React from "react";
import HeroDynamic from "../components/HeroDynamic";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroDynamic />

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
