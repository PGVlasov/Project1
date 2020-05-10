import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";

export const AlertState = ({ children }) => {
  return <AlertContext.Provider>{children}</AlertContext.Provider>;
};
