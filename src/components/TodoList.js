import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";
import { Modal, Header, Button, Icon } from "semantic-ui-react";
import { flattenTodos } from "../utils";

class TodoList extends React.Component {
  state = { open: false };

  renderList() {
    return this.props.todos.map(todo => {
      return (
        <div key={todo.id} className="ui items">
          <Link to={`/show/${todo.id}`} className="item">
            <div className="content">
              <div className="header">{todo.title}</div>
              <div className="description">{todo.description}</div>
            </div>
          </Link>
          <div float="right">
            <Link to={`/edit/${todo.id}`}>
              <button className="ui button primary">Edit</button>
            </Link>
            <Modal
              open={this.state.open}
              onClose={() => this.setState({ open: false })}
              trigger={
                <Button
                  className="ui button negative"
                  onClick={event => {
                    event.preventDefault();
                    this.setState({ open: true });
                  }}
                >
                  Delete
                </Button>
              }
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
                    this.setState({ open: false });
                  }}
                >
                  <Icon name="remove" /> No
                </Button>
                <Button
                  onClick={event => {
                    event.preventDefault();
                    console.log(todo.id);
                    this.props.dispatch(deleteTodo(todo.id));
                    this.setState({ open: false });
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
    });
  }

  render() {
    return <div className="ui list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    todos: flattenTodos(state.todos)
  };
};

export default connect(mapStateToProps)(TodoList);
