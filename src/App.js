import React from "react";
import ToDoList from "./Todo/todolist";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: "Купить продукт 1" },
    { id: 2, complited: false, title: "Купить продукт 2" },
    { id: 3, complited: false, title: "Купить продукт 3" },
    { id: 4, complited: false, title: "Купить продукт 4" },
    { id: 5, complited: true, title: "Купить продукт 5" }
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

  return (
    <Context.Provider value={{ removeProd }}>
      <div className="wrapper">
        <h1>Shopping list</h1>
        <AddTodo onCreate={addProd} />
        <h2>Basket</h2>
        {todos.length ? (
          <ToDoList todos={todos} onSelectMark={selectMarkTodo} />
        ) : (
          <p> List is empty!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
