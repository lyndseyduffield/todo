import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions";
import { flattenTodos, unflattenTodos } from "../utils";

const initialState = {
  todos: {
    10: { title: "Take out the garbaggio", description: "it's stinky!!!" }
  },
  lastId: 0
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const uid = state.lastId + 1;
      return { todos: { ...state.todos, [uid]: action.value }, lastId: uid };
    case EDIT_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.value.id]: action.value.todo
        }
      };
    case DELETE_TODO:
      const newTodos = unflattenTodos(
        flattenTodos(state.todos).filter(todo => {
          return todo.id !== action.value;
        })
      );
      return {
        ...state,
        todos: newTodos
      };
    default:
      return state;
  }
}
