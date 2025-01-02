"use client"
import { useState } from "react";
import HeroSection from "./components/Hero/Hero";

const CommentSection: React.FC = () => {
  // State to manage the comments and input
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Handle adding a new comment
  const addComment = () => {
    if (newComment.trim() === "") return; // Prevent adding empty comments

    setComments([newComment, ...comments]); // Add the new comment at the top
    setNewComment(""); // Clear the input field
  };

  return (



    <>
    <HeroSection/>

      






      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", marginTop: "150px" }} >
        <h1>Comment Section</h1>

        {/* Input for adding a new comment */}
        <div style={{ marginBottom: "20px" }}>
          <textarea
            rows={4}
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
          ></textarea>
          <button
            onClick={addComment}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              border: "1px solid black",
              background: "black",
              color: "white"
            }}
          >
            Add Comment
          </button>
        </div>

        {/* Display the comments */}
        <div>
          <h2>Comments</h2>
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            <ul style={{ listStyle: "none", padding: "0" }}>
              {comments.map((comment, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "10px",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  {comment}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      </>
      );
    
};

export default CommentSection;