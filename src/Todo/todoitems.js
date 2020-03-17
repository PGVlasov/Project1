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
    borderRadius: "4px",
    marginBottom: ".5rem"
  },
  input: {
    marginRight: "1rem"
  },
  remove: {
    background: "green",
    borderRadius: "4px",
    color: "#fff",
    border: "none"
  }
};

function ToDoItem({ todo, index, onChange }) {
  const { removeProd } = useContext(Context);
  return (
    <li style={styles.li}>
      <span className={todo.complited ? "done" : ""}>
        <input
          type="checkbox"
          checked={todo.complited}
          style={styles.input}
          onChange={() => {
            onChange(todo.id);
          }}
        />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>

      <button style={styles.remove} onClick={() => removeProd(todo.id)}>
        &times;
      </button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    complited: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default ToDoItem;
