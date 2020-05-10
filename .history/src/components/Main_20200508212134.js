import React from "react";
import ToDoList from "../Todo/todolist";
import Context from "../context";
import AddTodo from "../Todo/AddTodo";
import AddNewUser from "../Todo/AddUserName";
import NameList from "../Todo/nameList";
import Alert from "../Todo/Alert";
import { FirebaseState } from "../components/firebase/FirebaseState";

function Main() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: "туалетная бумага" },
    { id: 2, complited: false, title: "греча" },
    { id: 3, complited: false, title: "маска" },
    { id: 4, complited: false, title: "анисептик" },
  ]);

  function selectMarkTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }

        return todo;
      })
    );
  }

  function removeProd(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos.filter((todo) => todo.id === id));
  }

  function addProd(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          complited: false,
        },
      ])
    );
  }

  const [names, setName] = React.useState([
    { yourName: "Purchaser", nameId: "" },
  ]);

  function removeName(yourName) {
    setName(names.filter((name) => name.yourName !== yourName));
  }

  function addPurchasersname(yourName) {
    setName(
      names.map((name) => {
        if (name.yourName === yourName) {
        }
        return name;
      })
    );
  }

  function addUser(yourName) {
    setName(
      names.concat([
        {
          yourName,
          nameId: Date.now(),
        },
      ])
    );
  }

  let [alert, hideAlert] = React.useState([{}]);

  hideAlert = () => {
    return <div />;
  };

  return (
    <FirebaseState>
      <Context.Provider
        value={{ removeProd, removeName, addPurchasersname, hideAlert }}
      >
        <div className="conteiner">
          <div className="wrapper">
            <AddTodo onCreate={addProd} />
            <h2>List</h2>
            {todos.length ? (
              <ToDoList todos={todos} onSelectMark={selectMarkTodo} />
            ) : (
              <p> List is empty!</p>
            )}{" "}
            <h2>Purchaser</h2>
            <AddNewUser onCreate={addUser} />
            {names.length ? (
              <NameList names={names} addPurchasersname={addPurchasersname} />
            ) : (
              <p>We need your name</p>
            )}
            {names.length > 2 ? <Alert /> : <p>Have a nice shopping</p>}
          </div>
          <savePurchases />
        </div>
      </Context.Provider>
    </FirebaseState>
  );
}

export default Main;
