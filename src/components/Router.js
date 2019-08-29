import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <div className="ui container">
          <Route exact path="/" component={Home} />
          <Route path="/new" component={AddTodo} />
          <Route path="/show/:id" component={ShowTodo} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/delete/:id" component={DeleteTodo} />
        </div>
      </Switch>
    );
  }
}

export default Router;
