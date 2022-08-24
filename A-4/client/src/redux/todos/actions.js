import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    LOADED,
    TOGGLED,
    UPDATE_TEXT,
} from "./actionTypes";

//action creator to load the todos from the server
export const loaded = (todos) => {
    return {
        type: LOADED,
        payload: todos,
    };
};

//action creator to add a new todo to the UI
export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,
    };
};

//action creator to toggle between completed and incomplete status of the todo
export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId,
    };
};

//action creator to toggle between colors priority of the todo
export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color,
        },
    };
};

//action creator to delete the todo from the UI
export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,
    };
};

// action creator to complete all the todos in the UI
export const allCompleted = () => {
    return {
        type: ALLCOMPLETED,
    };
};
//action creator to clear the completed todos from the UI

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    };
};

//action creator to update the todo text in the UI
export const updateText = (todoId, text) => {
    return {
        type: UPDATE_TEXT,
        payload: {
            todoId,
            text,
        },
    };
}
