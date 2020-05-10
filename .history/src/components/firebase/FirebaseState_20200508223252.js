import React from "react";
import { irebaseContext } from "./firebaseContext";

export const FirebaseState = ({ children }) => {
  return <FirebaseContext.Provider>{children}</FirebaseContext.Provider>;
};
