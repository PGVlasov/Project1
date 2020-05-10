import React, { useContext } from "react";
import { AlertContext } from "../context/Alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  if (!alert) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>you should not be going for more than two !! Quarantine!!</strong>{" "}
      {alert.text}
      <button className="close" onClick={hide} type="button" aria-label="Close">
        <span>&times;</span>
      </button>
    </div>
  );
};
