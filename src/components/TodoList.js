import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class TodoList extends React.Component {
  renderList() {
    return this.props.todos.map(todo => {
      return (
        // TODO: Store todo state in redux so the show page can see it
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

// Turn the todos object from redux into an array of object with their ids
const flattenTodos = todosObj => {
  let ids = Object.keys(todosObj);
  return ids.map(id => {
    return {
      id,
      title: todosObj[id]["title"],
      description: todosObj[id]["description"]
    };
  });
};
