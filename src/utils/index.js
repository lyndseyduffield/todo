// Turn the todos object from redux into an array of object with their ids
// in component props, easier to map over
export const flattenTodos = todosObj => {
  let ids = Object.keys(todosObj);
  return ids.map(id => {
    return {
      id,
      title: todosObj[id]["title"],
      description: todosObj[id]["description"]
    };
  });
};
