import { combineReducers } from "redux";
import blogsReducer from "./blogs/blogsReducer";
import filteredBlogsReducer from "./filteredBlogs/filteredBlogsReducer";

// to combine all reducers
const rootReducer = combineReducers({
  blogs: blogsReducer,
  filteredBlogs: filteredBlogsReducer,
});

export default rootReducer;
