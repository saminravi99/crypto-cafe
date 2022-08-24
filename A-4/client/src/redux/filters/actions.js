import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

// function to change the priority of the todo
export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changeType,
        },
    };
};

// function to change the status of the todo
export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status,
    };
};
