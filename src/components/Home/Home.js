import React from "react";
import CategoryProvider from "../../context/CategoryProvider";
import Banner from "../Banner/Banner";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <CategoryProvider>
      <Banner></Banner>
      <Shop></Shop>
    </CategoryProvider>
  );
};

export default Home;
