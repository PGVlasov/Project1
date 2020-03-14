import React from "react";
import PropTypes from "prop-types";
import ToDoItem from "./todoitems";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    paddinng: 0
  }
};

function ToDoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <ToDoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onSelectMark}
          />
        );
      })}
    </ul>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectMark: PropTypes.func.isRequired
};

export default ToDoList;
