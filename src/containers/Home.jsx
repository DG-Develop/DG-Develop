import React, { useRef, useState } from "react";
import HeroDynamic from "../components/HeroDynamic";
import { Header } from "../components/Header";
import StackMain from "../components/StackMain";
import Footer from "../components/Footer";
import ModalStack from "../components/ModalStack";

const Home = () => {
  
  const [isOpenModalStack, setIsOpenModalStack] = useState(false);
  const [titleStack, setTitleStack] = useState("");
  const stack = useRef(null);
  const footer = useRef(null);

  const handleNextStack = () => {
    stack.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextFooter = () => {
    footer.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenModal = (title) => {
    setIsOpenModalStack(true);
    setTitleStack(title);
  };

  const handleCloseModal = () => {
    setIsOpenModalStack(false);
  };

  return (
    <>
      <Header />
      <main>
        <HeroDynamic OnNextStack={handleNextStack} />

        <StackMain
          Ref={stack}
          OnNextFooter={handleNextFooter}
          OnOpenModal={handleOpenModal}
        />
      </main>

      <Footer Ref={footer} />

      <ModalStack
        isOpen={isOpenModalStack}
        title={titleStack}
        OnCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Home;
