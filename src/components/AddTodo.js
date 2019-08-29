import React from "react";

class AddTodo extends React.Component {
  state = { todo: { title: "", description: "" } };

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
            value={this.state.todo.title}
            type="text"
            name="title"
            placeholder="What do you need to do?"
          />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            onChange={event =>
              this.handleChange("description", event.target.value)
            }
            value={this.state.todo.description}
            type="text"
            name=""
            placeholder="Anything else you need to remember?"
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

export default AddTodo;
