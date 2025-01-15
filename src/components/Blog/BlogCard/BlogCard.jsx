import React from "react";
import "./blog-card.css";

export const BlogCard = ({ image, tags, title }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
