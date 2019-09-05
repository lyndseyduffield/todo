import React from "react";

import Navbar from "./Navbar";
import TodoList from "./TodoList.js";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <TodoList history={this.props.history} />
      </div>
    );
  }
}

export default Home;
