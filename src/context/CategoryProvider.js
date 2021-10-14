import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("Lunch");
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
