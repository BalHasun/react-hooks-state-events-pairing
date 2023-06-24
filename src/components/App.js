import React, { useState } from "react";
import videoData from "../data/video";
import Comments from "./Comments";

function App() {
  const [upvotes, setUpvotes] = useState(videoData.upvotes);
  const [downvotes, setDownvotes] = useState(videoData.downvotes);
  const [showComments, setShowComments] = useState(true);
  const [filteredComments, setFilteredComments] = useState([]);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "John",
      text: "This is a great article!",
      date: "2023-06-22",
      upvotes: 3,
      downvotes: 1,
    },
    {
      id: 2,
      user: "Jane",
      text: "I disagree with some of the points in this article.",
      date: "2023-06-23",
      upvotes: 1,
      downvotes: 2,
    },
    {
      id: 3,
      user: "Bob",
      text: "Thanks for writing this!",
      date: "2023-06-24",
      upvotes: 2,
      downvotes: 0,
    },
  ]);

  const handleAddComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
  };

  const handleSearch = (searchTerm) => {
    const filtered = comments.filter((comment) =>
      comment.user.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComments(filtered);
  };

  const handleRemoveComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  const handleSort = (sortOption) => {
    const sortedComments = [...comments];
    if (sortOption === "date") {
      sortedComments.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === "upvotes") {
      sortedComments.sort((a, b) => b.upvotes - a.upvotes);
    } else if (sortOption === "downvotes") {
      sortedComments.sort((a, b) => b.downvotes - a.downvotes);
    }
    setComments(sortedComments);
  };
  return (
    <div className="App">
      <div className="video-container">
        <iframe
          title="video"
          src={videoData.embedUrl}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <div className="video-details">
          <h2>{videoData.title}</h2>
          <p>
            {videoData.views} views • {videoData.uploadDate}
          </p>
          <div className="vote-buttons">
            <button onClick={handleUpvote}>👍 {upvotes}</button>
            <button onClick={handleDownvote}>👎 {downvotes}</button>
          </div>
        </div>
      </div>
      <div className="comments-container">
        <button onClick={handleToggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
        {showComments && (
          <div className="comments-list">
            <Comments
              comments={
                filteredComments.length > 0 ? filteredComments : comments
              }
              onAddComment={handleAddComment}
              onSearch={handleSearch}
              onRemove={handleRemoveComment}
              onSort={handleSort}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
