import React, { useContext } from "react";
import Context from "../context";

export const Alert = () => {
  const { hideAlert } = useContext(Context);
  if (!alert) {
    return null;
  }

  return (
    <div className="setAlert">
      <strong>you should not be going for more than two !! Quarantine!!</strong>{" "}
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
