import React from "react";
import "./opensource-card.css";

export const OpenSourceCard = ({ repo }) => {
  return (
    <div className="opensource-card">
      <div className="card-header">
        <h2>{repo.repository}</h2>
        <span className="stars">{repo.stars} ★</span>
      </div>
      <p>{repo.contributionDate}</p>
      <a href={repo.commitLink} target="_blank" rel="noopener noreferrer">
        Commit Link
      </a>
    </div>
  );
};