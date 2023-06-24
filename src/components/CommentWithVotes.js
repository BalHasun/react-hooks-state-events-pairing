import React, { useState } from "react";

function CommentWithVotes({ comment, onRemove }) {
  const [upvotes, setUpvotes] = useState(comment.upvotes);
  const [downvotes, setDownvotes] = useState(comment.downvotes);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const handleRemove = () => {
    onRemove(comment.id);
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <div className="vote-buttons">
        <button onClick={handleUpvote}>👍 {upvotes}</button>
        <button onClick={handleDownvote}>👎 {downvotes}</button>
        <button onClick={handleRemove}>Remove Comment</button>
      </div>
      <p>
        By {comment.user} on {comment.date}
      </p>
    </div>
  );
}

export default CommentWithVotes;
