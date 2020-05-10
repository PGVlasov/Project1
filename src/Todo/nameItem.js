import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: ".5rem"
  },
  remove: {
    background: "red",
    borderRadius: "4px",
    color: "#fff",
    border: "none"
  }
};

function NameItem({ name, onChange }) {
  const { removeName } = useContext(Context);
  return (
    <li style={styles.li}>
      <span>{name.yourName}</span>
      <button style={styles.remove} onClick={() => removeName(name.yourName)}>
        &times;
      </button>
    </li>
  );
}

NameItem.propTypes = {
  name: PropTypes.shape({
    mameId: PropTypes.number.isRequired,
    yourName: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
export default NameItem;
