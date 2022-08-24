//Reducer

import { ADD_BLOG } from "./actionTypes";

const { initialState } = require("./initialState");

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
      return {
        ...state,
        blogs: state.blogs.map((blog) => {
          if (blog.id === action.payload.id) {
            return action.payload;
          } else {
            return blog;
          }
        }),
      };
    default:
      return state;
  }
};

export default blogsReducer;
