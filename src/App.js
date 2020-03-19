import React from "react";
import ToDoList from "./Todo/todolist";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Newlist from "./Todo/NewList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: "Купить сыр" },
    { id: 2, complited: false, title: "Купить хлеб" }
  ]);

  function selectMarkTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }

        return todo;
      })
    );
  }

  function removeProd(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addProd(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          complited: false
        }
      ])
    );
  }

  let newtodos = [];

  return (
    <Context.Provider value={{ removeProd }}>
      <div className="wrapper">
        <h1>Shopping list</h1>
        <AddTodo onCreate={addProd} />
        <h2>List</h2>
        {todos.length ? (
          <ToDoList todos={todos} onSelectMark={selectMarkTodo} />
        ) : (
          <p> List is empty!</p>
        )}
      </div>
      <div className="nextTime">
        <h2>Not bought</h2>
        {newtodos.length ? (
          <Newlist todos={todos} onSelectMark={selectMarkTodo} />
        ) : (
          <p> List is empty!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
