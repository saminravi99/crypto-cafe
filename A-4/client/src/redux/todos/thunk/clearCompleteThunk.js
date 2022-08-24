import { clearCompleted } from "../actions";

const clearCompleteThunk = () => {
  return (dispatch, getState) => {
    const { todos } = getState();
    //array of ids of completed todos
    const completedTodoIds = todos
      .filter((todo) => todo.completed)
      .map((todo) => todo.id);
    // make deleted request for each id in completedTodoIds
    completedTodoIds.forEach((id) => {
      fetch(`https://react-redux-todo-server.herokuapp.com/todos/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((todo) => {
          dispatch(clearCompleted());
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
};

export default clearCompleteThunk;
