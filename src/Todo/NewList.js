import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function Newlist() {
  const { addNewProd } = useContext(Context);
}

Newlist.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectMark: PropTypes.func.isRequired
};

export default Newlist;
