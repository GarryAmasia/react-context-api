import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const context = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <context.Provider value={{ cart, setCart }}>{children}</context.Provider>
  );
};

export default Context;
