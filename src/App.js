import React from "react";
import ToDoList from "./Todo/todolist";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NovBar";
import { Archive } from "./components/Archive";
import { NewList } from "./components/NewList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: "туалетная бумага" },
    { id: 2, complited: false, title: "греча" },
    { id: 3, complited: false, title: "маска" },
    { id: 4, complited: false, title: "анисептик" }
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
    console.log(todos.filter(todo => todo.id === id));
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
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={"/"} exact component={App} />
        <Route path={"/NewList"} component={NewList} />
        <Route path={"/Archive"} component={Archive} />
      </Switch>
      <Context.Provider value={{ removeProd }}>
        <div className="wrapper">
          <AddTodo onCreate={addProd} />
          <h2>List</h2>
          {todos.length ? (
            <ToDoList todos={todos} onSelectMark={selectMarkTodo} />
          ) : (
            <p> List is empty!</p>
          )}
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
