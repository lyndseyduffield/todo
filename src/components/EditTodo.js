import React from "react";

class EditTodo extends React.Component {
  state = {
    todo: {
      title: "take out the trash",
      description: "you need to take the trash out because it smells like shit",
      id: 1
    }
  };

  handleChange(key, value) {
    this.setState({ todo: { ...this.state.todo, [key]: value } });
  }

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input
            onChange={event => this.handleChange("title", event.target.value)}
            type="text"
            name="title"
            value={this.state.todo.title}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            onChange={event =>
              this.handleChange("description", event.target.value)
            }
            type="text"
            name=""
            placeholder="Anything else you need to remember?"
            value={this.state.todo.description}
          />
        </div>
        <div className="field">
          <button className="ui button" type="submit">
            Submit
          </button>
          <button className="ui button negative">Delete</button>
        </div>
      </form>
    );
  }
}

export default EditTodo;
