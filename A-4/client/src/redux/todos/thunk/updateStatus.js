import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
    return async (dispatch) => {
        const response = await fetch(`https://react-redux-todo-server.herokuapp.com/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !currentStatus,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(toggled(todo.id));
    };
};

export default updateStatus;
