import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

class AddTodo extends React.Component {
  state = {
    title: "",
    description: "",
    titleErr: ""
  };

  handleChange(key, value) {
    this.setState({ [key]: value });
  }

  validate() {}

  renderError() {
    if (this.state.titleErr) {
      return (
        <div className="ui negative message">
          <div className="header">{this.state.titleErr}</div>
        </div>
      );
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = {
      title: this.state.title,
      description: this.state.description
    };
    if (this.state.title === "") {
      this.setState({ titleErr: "Please enter a todo" });
    } else {
      this.props.dispatch(addTodo(todo));
      this.props.history.push("/");
    }
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
        {this.renderError()}
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
        </div>
      </form>
    );
  }
}

export default connect()(AddTodo);
