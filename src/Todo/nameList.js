import React from "react";
import PropTypes from "prop-types";
import NameItem from "./nameItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    paddinng: 0,
    border: "1px solid #ccc",
  },
};

function NameList(props) {
  return (
    <ul style={styles.ul}>
      {props.names.map((name, index) => {
        return (
          <NameItem
            name={name}
            key={name.nameId}
            onChange={props.addPurchasersname}
          />
        );
      })}
    </ul>
  );
}

NameList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  addPurchasersname: PropTypes.func.isRequired,
};

export default NameList;
