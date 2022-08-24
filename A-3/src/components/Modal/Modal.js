import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { addBlog } from "../../redux/blogs/actions";

const Modal = () => {
  const dispatch = useDispatch();
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
  const [formData, setFormData] = useState({
    id: uniqid(),
    author: "",
    title: "",
    category: "",
    blogImg: "",
    authorImg: "",
    date: "",
    readTime: "",
  });
  const handleAddBlog = (e) => {
    e.preventDefault();
    return new Promise((resolve, reject) => {
      resolve();
    })
      .then(() => {
        setFormData({
          ...formData,
          blogImg: "https://picsum.photos/450/200",
          authorImg: "https://picsum.photos/450/200",
          date: `${new Date().getDate()} ${
            monthNames[new Date().getMonth()]
          }, ${new Date().getFullYear()}`,
          readTime: `${Math.floor(Math.random() * (10 - 1) + 1)} min read`,
        });
        console.log(formData);
      })
      .then(() => {
        dispatch(addBlog(formData));
      })
      .then(() => {
        setFormData({
          id: uniqid(),
          author: "",
          title: "",
          category: "",
          blogImg: "",
          authorImg: "",
          date: "",
          readTime: "",
        });
      })
      .then(() => {
        document.getElementById("add-blog").checked = false;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input type="checkbox" id="add-blog" className="modal-toggle" />
      <label htmlFor="add-blog" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="add-blog"
            className="btn btn-error btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleAddBlog}>
            <div className="form-control w-full mt-3 max-w-xs mx-auto">
              <label className="label">
                <span className="label-text font-bold">Author Name</span>
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                required
                value={formData.author}
                type="text"
                placeholder="Write Your Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full mt-3 max-w-xs mx-auto">
              <label className="label">
                <span className="label-text font-bold">Blog Category</span>
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
                value={formData.category}
                type="text"
                placeholder="Write Your Category"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mt-3 mx-auto">
              <label className="label">
                <span className="label-text font-bold">Blog Title</span>
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
                value={formData.title}
                type="text"
                placeholder="Write Your Title"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto mt-3">
              <label className="block">
                <label className="label">
                  <span className="label-text font-bold">Blog Image</span>
                </label>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                />
              </label>
            </div>
            <div className="form-control modal-action w-full max-w-xs mx-auto mt-3">
              <button type="submit" className="btn btn-outline">
                Add Blog
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default Modal;
