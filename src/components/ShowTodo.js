import React from "react";
import { connect } from "react-redux";

class ShowTodo extends React.Component {
  state = {
    title: this.props.todo.title,
    description: this.props.todo.description
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <p>{this.state.title}</p>
        </div>
        <div className="field">
          <label>Description</label>
          <p>{this.state.description}</p>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10);
  return {
    todo: state.todos[id]
  };
};

export default connect(mapStateToProps)(ShowTodo);
