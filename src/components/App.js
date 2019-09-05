import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import EditTodo from "./EditTodo";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <div className="ui container">
          <Route exact path="/" component={Home} />
          <Route path="/new" component={AddTodo} />
          <Route path="/show/:id" component={ShowTodo} />
          <Route path="/edit/:id" component={EditTodo} />
        </div>
      </Switch>
    );
  }
}

export default App;
