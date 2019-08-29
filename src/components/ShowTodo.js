import React from "react";

class ShowTodo extends React.Component {
  state = {
    todo: {
      title: "take out the trash",
      description: "you need to take the trash out because it smells like shit",
      id: 1
    }
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <p>{this.state.todo.title}</p>
        </div>
        <div className="field">
          <label>Description</label>
          <p>{this.state.todo.description}</p>
        </div>
      </form>
    );
  }
}

export default ShowTodo;
