import React from "react";
import { editTodo } from "../actions";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class EditTodo extends React.Component {
  state = {
    title: this.props.todo.title,
    description: this.props.todo.description
  };

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = parseInt(this.props.match.params.id, 10);
    this.props.dispatch(editTodo(id, this.state));
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
