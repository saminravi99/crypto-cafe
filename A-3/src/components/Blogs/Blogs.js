import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NoResult from "../NoResult/NoResult";
import Blog from "./Blog";

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  const { category, author, search } = useSelector(
    (state) => state.filteredBlogs
  );

  let noSearchFilter;
  let noAuthorCategoryFilter = [];

  if (search) {
    noSearchFilter = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (
    search &&
    author &&
    category &&
    blogs
      .filter((blog) => {
        if (category) {
          return blog.category === category;
        }
        return true;
      })
      .filter((blog) => {
        if (author) {
          return blog.author === author;
        }
        return true;
      })
      .filter((blog) => {
        if (search) {
          return blog.title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
      }).length === 0
  ) {
    noAuthorCategoryFilter = [];
  }

  console.log(noSearchFilter);

  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-gray-50 h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* <Hero />

        {(search || category || author) && (
          <div className="border mt-6 border-slate-200 justify-between flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
            <span className="outline-none border-none bg-gray-50 h-full flex items-center  w-full mr-2  max-w-2xl mx-auto text-xl text-gray-700 ">
              Search Results for:{" "}
              <span className="font-bold pl-2">
                {search || category || author}
              </span>
            </span>
            {!search && (category || author) && (
              <div>
                <FontAwesomeIcon
                  onClick={handleRemoveFilter}
                  className="text-red-500 text-lg cursor-pointer"
                  icon={faX}
                />
              </div>
            )}
          </div>
        )} */}

        {/* <!-- card grid  --> */}
        {(search && noSearchFilter.length <= 0) ||
        (search && author && category && noAuthorCategoryFilter.length <= 0) ? (
          <NoResult search={search} category={category} author={author} />
        ) : (
          <div className=" max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/* <!-- single card  --> */}
            {blogs
              .filter((blog) => {
                if (category) {
                  return blog.category === category;
                }
                return true;
              })
              .filter((blog) => {
                if (author) {
                  return blog.author === author;
                }
                return true;
              })
              .filter((blog) => {
                if (search) {
                  return blog.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                }
                return true;
              })
              .map((blog) => {
                return <Blog key={blog.id} {...blog} />;
              })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
