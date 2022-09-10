import React from "react";
import HeroDynamic from "../components/HeroDynamic";
import { Header } from "../components/Header";
import StackMain from "../components/StackMain";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroDynamic />

        <StackMain />
      </main>
    </>
  );
};

export default Home;
