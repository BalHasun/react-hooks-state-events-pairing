import React, { useState } from "react";
import CommentSearch from "./CommentSearch";
import CommentWithVotes from "./CommentWithVotes";

function Comments({ comments }) {
  const [filteredComments, setFilteredComments] = useState(comments);

  const handleSearch = (searchTerm) => {
    const filtered = comments.filter((comment) =>
      comment.user.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComments(filtered);
  };

  const handleRemoveComment = (id) => {
    const updatedComments = filteredComments.filter(
      (comment) => comment.id !== id
    );
    setFilteredComments(updatedComments);
  };

  return (
    <div className="comments-container">
      <CommentSearch comments={comments} onSearch={handleSearch} />
      <div className="comments-list">
        {filteredComments.map((comment) => (
          <CommentWithVotes
            key={comment.id}
            comment={comment}
            onRemove={handleRemoveComment}
          />
        ))}
      </div>
    </div>
  );
}

export default Comments;
