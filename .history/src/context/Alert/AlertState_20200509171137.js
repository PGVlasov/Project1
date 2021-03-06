import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";
import { SHOW_ALERT, HIDE_ALERT } from "../types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(
    alertReducer
    //(initialState: { visible: false }) // eslint-disable-line no-use-before-define
  );

  const show = (text, type = "warning") =>
    dispatch({
      type: SHOW_ALERT,
      peyload: { text, type },
    });

  const hide = () => dispatch({ type: HIDE_ALERT });
  return (
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};
