import { useState, useEffect } from "react";
import "./game-card-random.css";

const RandomCard = ({ cardData }) => {
  if (!cardData) return;

  const { id, alt_description, urls } = cardData;

  return (
    <div className="random-card-item" id={id}>
      <div className="card">
        <img src={urls.small} className="card-img-top" alt={alt_description} />
        <div className="card-body">
          <p className="card-text">{alt_description}</p>
        </div>
      </div>
    </div>
  );
};

export default RandomCard;
