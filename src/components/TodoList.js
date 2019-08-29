import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { flattenTodos } from "../utils";

class TodoList extends React.Component {
  renderList() {
    return this.props.todos.map(todo => {
      return (
        <Link to={`/show/${todo.id}`} className="item">
          <div className="content">
            <div className="header">{todo.title}</div>
            <div class="description">{todo.description}</div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return <div className="ui list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { todos: flattenTodos(state.todos) };
};

export default connect(mapStateToProps)(TodoList);
