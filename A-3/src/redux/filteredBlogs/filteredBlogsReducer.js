const {
  SEARCH_FILTER,
  CATEGORY_FILTER,
  AUTHOR_FILTER,
  REMOVE_FILTER,
  REMOVE_SEARCH_FILTER,
  REMOVE_CATEGORY_FILTER,
  REMOVE_AUTHOR_FILTER,
} = require("./actionTypes");
const { initialState } = require("./initialState");

//Redcuer Function
const filteredBlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_FILTER:
      return {
        ...state,
        category: action.payload.category,
      };
    case SEARCH_FILTER:
      return {
        ...state,
        search: action.payload.search,
      };
    case AUTHOR_FILTER:
      return {
        ...state,
        author: action.payload.author,
      };
    case REMOVE_FILTER:
      return {
        ...state,
        category: "",
        author: "",
        search: "",
      };
    case REMOVE_SEARCH_FILTER:
      return {
        ...state,
        search: "",
      };
    case REMOVE_CATEGORY_FILTER:
      return {
        ...state,
        category: "",
      };
    case REMOVE_AUTHOR_FILTER:
      return {
        ...state,
        author: "",
      };
    default:
      return state;
  }
};

export default filteredBlogsReducer;
