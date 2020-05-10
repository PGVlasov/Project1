import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducwr } from "./alertReducer";

export const AlertState = ({ children }) => {
  const [] = useReducer(alertReducer);
  return <AlertContext.Provider>{children}</AlertContext.Provider>;
};
