import React from "react";

const Home = () => {
  return (
    <>
      <header>
        <nav>
          <span className="logo"></span>
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
              <a href="">
                <span className="twitter"></span>
              </a>
            </ul>
            <ul>
              <a href="">
                <span className="github"></span>
              </a>
            </ul>
          </li>
        </nav>
      </header>
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
      </main>
    </>
  );
};

export default Home;
