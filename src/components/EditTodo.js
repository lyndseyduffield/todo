import React from "react";
import { editTodo } from "../actions";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class EditTodo extends React.Component {
  state = {
    title: this.props.todo.title,
    description: this.props.todo.description,
    titleErr: ""
  };

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

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
    const id = parseInt(this.props.match.params.id, 10);
    const todo = {
      title: this.state.title,
      description: this.state.description
    };
    if (this.state.title === "") {
      this.setState({ titleErr: "Please enter a todo" });
    } else {
      this.props.dispatch(editTodo(id, todo));
      this.props.history.push("/");
    }
  }

  render() {
    //console.log(this.props);
    return (
      <form className="ui form">
        <Navbar />
        <div className="field">
          <label>Title</label>
          <input
            onChange={event => this.handleChange("title", event.target.value)}
            type="text"
            name="title"
            value={this.state.title}
          />
        </div>
        {this.renderError()}
        <div className="field">
          <label>Description</label>
          <textarea
            onChange={event =>
              this.handleChange("description", event.target.value)
            }
            type="text"
            name=""
            value={this.state.description}
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

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10);
  return {
    todo: state.todos[id]
  };
};

export default connect(mapStateToProps)(EditTodo);
