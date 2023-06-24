import React, { useState } from "react";

function CommentSearch({ comments, onSearch, onSort, sortOption }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleSort = (event) => {
    onSort(event.target.value);
  };

  return (
    <div className="comment-search">
      <input
        type="text"
        placeholder="Search comments by username"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={sortOption} onChange={handleSort}>
        <option value="date">Sort by date</option>
        <option value="upvotes">Sort by upvotes</option>
        <option value="downvotes">Sort by downvotes</option>
      </select>
    </div>
  );
}

export default CommentSearch;
