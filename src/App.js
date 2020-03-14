import React from "react";
import ToDoList from "./Todo/todolist";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complided: false, title: "Купить продукт 1" },
    { id: 2, complided: false, title: "Купить продукт 2" },
    { id: 3, complided: false, title: "Купить продукт 3" },
    { id: 4, complided: false, title: "Купить продукт 4" },
    { id: 5, complided: true, title: "Купить продукт 5" } //при true  продукт должен быть зачернут, не раб
  ]);

  function selectMarkTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.complided = !todo.complided;
        }

        return todo;
      })
    );
  }

  return (
    <div className="wrapper">
      <h1>Shopping list</h1>
      <h2>Basket</h2>
      <ToDoList todos={todos} onSelectMark={selectMarkTodo} />
    </div>
  );
}

export default App;
