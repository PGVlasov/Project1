import React from "react";
import ToDoList from "./Todo/todolist";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Newlist from "./Todo/NewList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: "сыр" },
    { id: 2, complited: false, title: "хлеб" },
    { id: 3, complited: false, title: "молоко" },
    { id: 4, complited: false, title: "яйца" }
  ]);

  let newtodos = [];

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
    /*console.log(todos.filter(todo => todo.id === id));*/
  }

  function addNewProd(id) {
    newtodos.concat([todos.filter(todo => todo.id === id)]);
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
          <Newlist newtodos={newtodos} addNewProd={addNewProd} />
        ) : (
          <p> List is empty!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
