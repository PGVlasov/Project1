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
        <Route path={"/newList"} component={NewList} />
        <Route path={"/main"} exact component={Main} />
        <Route path={"/archive"} component={Archive} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
