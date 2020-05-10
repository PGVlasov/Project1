import React, { useContext } from "react";
import Context from "../context";

export const Alert = ({ alert }) => {
  const { hideAlert } = useContext(Context);
  if (!alert) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>you should not be going for more than two !! Quarantine!!</strong>{" "}
      {alert.text}
      <button
        className="close"
        onClick={() => hideAlert(alert)}
        type="button"
        aria-label="Close"
      >
        <span>&times;</span>
      </button>
    </div>
  );
};
