import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions";

const initialState = {
  todos: {
    10: { title: "Take out the garbaggio", description: "blah blah" },
    11: { title: "kdsfnklsdnfklds", description: "as.kndajkdbnj" }
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
        todos: { ...state.todos, [action.value.id]: action.value.todo }
      };
    case DELETE_TODO:
      let { [action.value]: whatever, ...todos } = state.todos;
      return { ...state, todos };
    default:
      return state;
  }
}
