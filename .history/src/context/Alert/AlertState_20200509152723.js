import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(
    alertReducer,
    (initialState: { visible: false }) // eslint-disable-line no-use-before-define
  );
  return <AlertContext.Provider>{children}</AlertContext.Provider>;
};
