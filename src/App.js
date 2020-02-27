import React from 'react';
import ToDoList from './Todo/todolist';


function App() {
  const todos = [
    {id:1, complided: false, title: "Купить продукт 1"},
    {id:2, complided: false, title: "Купить продукт 2"},
    {id:3, complided: false, title: "Купить продукт 3"},
    {id:4, complided: false, title: "Купить продукт 4"}
  ]

  return (
    <div className="wrapper">
      <h1>Shopping list</h1>
        <h2>Basket</h2>
        <div className ="basket">
          <ToDoList todos = {todos} />
        </div>
    </div>
  );
}

export default App;
