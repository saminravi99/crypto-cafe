import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setPageNumber } from "../../features/pagination/paginationSlice";

export default function Pagination() {
  //redux hooks 
  const dispatch = useDispatch();
  const { videosLength, pageNumber } = useSelector((state) => state.pagination);

  const videosPerPage = 8;
  //local State
  const [isActivePage, setActivePage] = useState(pageNumber);

  // to get the number of pages in an array
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(videosLength / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  // to set the active page
  const handlePageChange = (page) => {
    setActivePage(page);
    dispatch(setPageNumber(page));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pageNumbers.map((number) => (
          <div
            key={number}
            onClick={() => handlePageChange(number)}
            className={` cursor-pointer
            ${
              isActivePage === number
                ? "bg-blue-600"
                : "bg-blue-200 text-black hover:bg-blue-600 hover:text-white"
            }
           text-white px-4 py-1 rounded-full`}
          >
            {number}
          </div>
        ))}
      </div>
    </section>
  );
}
