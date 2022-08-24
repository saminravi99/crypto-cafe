import debounce from "lodash.debounce";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import searchImage from "../../assets/search.svg";
import {
  removeAuthorFilter,
  removeCategoryFilter, removeFilter, removeSearchFilter,
  searchFilter
} from "../../redux/filteredBlogs/actions";
import Hero from "../Hero/Hero";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { category, author, search } = useSelector(
    (state) => state.filteredBlogs
  );

  const handleRemoveFilter = () => {
    dispatch(removeFilter());
    document.getElementById("search").value = "";
  };

  //handle change function debounce
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(searchFilter(e.target.value));
  };

  const debouncedSearch = debounce(handleChange, 1000);

  //debounce to console event
  // const debounce = (callback, delay) => {
  //   let timeoutId;
  //   return (event) => {
  //     if (timeoutId) {
  //       clearTimeout(timeoutId);
  //     }
  //     timeoutId = setTimeout(() => {
  //       callback(event);
  //     }, delay);
  //   };
  // };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   debounce(
  //     () => {
  //       console.log(e.target.value);
  //     }
  //     , 1000)(e);
  // }

  const handleRemoveSearchFilter = () => {
    dispatch(removeSearchFilter());
    document.getElementById("search").value = "";
  };

  const handleRemoveCategoryFilter = () => {
    dispatch(removeCategoryFilter());
  };
  const handleRemoveAuthorFilter = () => {
    dispatch(removeAuthorFilter());
  };

  return (
    <div>
      <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <input
          id="search"
          onChange={debouncedSearch}
          className="outline-none border-none bg-gray-50 h-full w-full mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
        <img
          className="inline h-6 cursor-pointer"
          src={searchImage}
          alt="Search"
        />
      </div>
      <div className="relative pt-8  px-4 sm:px-6 lg:pt-16  lg:px-8">
        <Hero />

        {(search || category || author) && (
          <div className="border mt-6 border-slate-200 justify-between flex items-center w-11/12 lg:w-1/2 mx-auto h-12 px-5 rounded-lg text-sm ring-emerald-200">
            <span className="outline-none border-none bg-gray-50 h-full flex items-center  w-full mr-2  max-w-2xl mx-auto text-xl text-gray-700 ">
              Search Results for:{" "}
              <span className="font-bold pl-2">
                {search && (
                  <button className="btn text-black hover:text-white btn-sm btn-outline ">
                    <span>{search ? search : null}</span>
                    <svg
                      onClick={handleRemoveSearchFilter}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
                {category && (
                  <button
                    className={`btn text-black hover:text-white btn-sm btn-outline  ${
                      category ? (search ? "ml-2" : "") : ""
                    }`}
                  >
                    <span>
                      {category ? (search ? `${category}` : category) : null}
                    </span>
                    <svg
                      onClick={handleRemoveCategoryFilter}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
                {author && (
                  <button
                    className={`btn text-black hover:text-white btn-sm btn-outline ${
                      author ? (category ? "ml-2" : !category && search ? "ml-2" : "") : ""
                    } `}
                  >
                    <span>
                      {author ? (category ? `${author}` : author) : null}
                    </span>
                    <svg
                      onClick={handleRemoveAuthorFilter}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </span>
            </span>
            <div>
              <button
                onClick={handleRemoveFilter}
                className="btn btn-circle btn-xs btn-error"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
