import { ADD_BLOG, DELETE_BLOG, UPDATE_BLOG } from "./actionTypes";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const addBlog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: {
      ...blog,
      authorImg:
        blog.authorImg ||
        `https://picsum.photos/id/${Math.floor(
          Math.random() * (10 - 1) + 1
        )}/450/200`,
      blogImg:
        blog.blogImg ||
        `https://picsum.photos/id/${Math.floor(
          Math.random() * (10 - 1) + 1
        )}/450/200`,
      date:
        blog.date ||
        `${new Date().getDate()} ${
          monthNames[new Date().getMonth()]
        }, ${new Date().getFullYear()}`,
      readTime:
        blog.readTime || `${Math.floor(Math.random() * (10 - 1) + 1)} min read`,
    },
  };
};

export const deleteBlog = (id) => {
  return {
    type: DELETE_BLOG,
    payload: {
      id,
    },
  };
};

export const updateBlog = (blog) => {
  return {
    type: UPDATE_BLOG,
    payload: blog,
  };
};
