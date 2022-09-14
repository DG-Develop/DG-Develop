import React, { useRef, useState } from "react";
import HeroDynamic from "../components/HeroDynamic";
import { Header } from "../components/Header";
import StackMain from "../components/StackMain";
import Footer from "../components/Footer";
import ModalStack from "../components/ModalStack";

const Home = () => {
  const [isOpenModalStack, setIsOpenModalStack] = useState(false)
  const stack = useRef(null);
  const footer = useRef(null);

  const handleNextStack = () => {
    stack.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextFooter = () => {
    footer.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenModal = () => {
    setIsOpenModalStack(true)
  }

  return (
    <>
      <Header />
      <main>
        <HeroDynamic OnNextStack={handleNextStack} />

        <StackMain Ref={stack}  OnNextFooter={handleNextFooter} OnOpenModal={handleOpenModal}/>
      </main>

      <Footer Ref={footer} />

      <ModalStack  isOpen={isOpenModalStack}/>
    </>
  );
};

export default Home;
