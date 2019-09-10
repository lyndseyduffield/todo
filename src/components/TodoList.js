import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";
import { Modal, Header, Button, Icon } from "semantic-ui-react";
import { flattenTodos } from "../utils";
import "./TodoList.css";

class TodoList extends React.Component {
  state = { id: null };

  renderList() {
    return this.props.todos.map(todo => {
      return (
        <div key={todo.id} className="ui items flex-item">
          <Link to={`/show/${todo.id}`} className="item">
            <div className="content">
              <div className="header">{todo.title}</div>
              <div className="description">{todo.description}</div>
            </div>
          </Link>
          <div className="mini-flex">
            <Link to={`/edit/${todo.id}`}>
              <button className="ui button primary">Edit</button>
            </Link>
            <div>
              <Button
                className="ui button negative"
                onClick={event => {
                  event.preventDefault();
                  this.setState({ id: todo.id });
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className="list-header">Todo List</h1>
        <div className="grid">
          {this.renderList()}
          <Modal
            open={this.state.id ? true : false}
            onClose={() => this.setState({ id: null })}
            basic
            size="small"
          >
            <Header icon="archive" content="Delete Todo" />
            <Modal.Content>
              <h5>Are you sure?</h5>
            </Modal.Content>
            <Modal.Actions>
              <Button
                basic
                color="red"
                inverted
                onClick={event => {
                  event.preventDefault();
                  this.setState({ id: null });
                }}
              >
                <Icon name="remove" /> No
              </Button>
              <Button
                onClick={event => {
                  event.preventDefault();
                  this.props.dispatch(deleteTodo(this.state.id));
                  this.setState({ id: null });
                }}
                color="green"
                inverted
              >
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: flattenTodos(state.todos)
  };
};

export default connect(mapStateToProps)(TodoList);
