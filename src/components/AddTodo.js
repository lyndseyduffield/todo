import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

class AddTodo extends React.Component {
  state = {
    title: "",
    description: ""
  };

  handleChange(key, value) {
    this.setState({ [key]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addTodo(this.state));
  }

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input
            onChange={event => this.handleChange("title", event.target.value)}
            value={this.state.title}
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
            value={this.state.description}
            type="text"
            name=""
            placeholder="Anything else you need to remember?"
          />
        </div>
        <div className="field">
          <button
            onClick={event => this.handleSubmit(event)}
            className="ui button"
            type="submit"
          >
            Submit
          </button>
          <button className="ui button negative">Delete</button>
        </div>
      </form>
    );
  }
}

export default connect(null)(AddTodo);
