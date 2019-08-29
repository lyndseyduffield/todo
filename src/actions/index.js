export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = todo => {
  const action = {
    type: ADD_TODO,
    value: todo
  };
  return action;
};

export const editTodo = (id, todo) => {
  const action = {
    type: EDIT_TODO,
    value: {
      id,
      todo
    }
  };
  return action;
};

export const deleteTodo = id => {
  const action = {
    type: DELETE_TODO,
    value: id
  };
  return action;
};
