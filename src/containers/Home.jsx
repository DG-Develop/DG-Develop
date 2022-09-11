import React, { useRef } from "react";
import HeroDynamic from "../components/HeroDynamic";
import { Header } from "../components/Header";
import StackMain from "../components/StackMain";
import Footer from "../components/Footer";

const Home = () => {
  const stack = useRef(null);
  const footer = useRef(null);

  const handleNextStack = () => {
    stack.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextFooter = () => {
    footer.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main>
        <HeroDynamic OnNextStack={handleNextStack} />

        <StackMain Ref={stack}  OnNextFooter={handleNextFooter}/>
      </main>

      <Footer Ref={footer} />
    </>
  );
};

export default Home;
