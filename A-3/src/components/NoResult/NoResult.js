import React from 'react'

const NoResult = ({
    search,
    category,
    author,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-xl tracking-tight font-bold text-gray-500 sm:text-4xl">
        NO RESULTS FOUND FOR{" "}
        <span className="font-extrabold text-gray-900">
          {search ? search : null}
          {category ? (search ? ` , ${category}` : category) : null}
          {author ? (category ? ` , ${author}` : author) : null}
        </span>
      </h2>
    </div>
  );
}

export default NoResult