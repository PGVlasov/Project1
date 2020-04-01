import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NovBar";
import { Archive } from "./components/Archive";
import { NewList } from "./components/NewList";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={"/Main"} exact component={Main} />
        <Route path={"/NewList"} component={NewList} />
        <Route path={"/Archive"} component={Archive} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
