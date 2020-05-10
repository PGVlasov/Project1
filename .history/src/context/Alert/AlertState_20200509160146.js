import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";
import { SHOW_ALERT } from "../types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(
    alertReducer,
    (initialState: { visible: false }) // eslint-disable-line no-use-before-define
  );
  const show = (text, type = "warning") =>
    dispatch({
      type: SHOW_ALERT,
      peyload: { text, type },
    });
  return <AlertContext.Provider>{children}</AlertContext.Provider>;
};
