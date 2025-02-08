import { useState, useEffect } from "react";
import "./game-card-item.css";

const GameCardItem = ({ url, name, id, compareIds }) => {
  const [isClickable, setIsClickable] = useState(true);
  const [isRight, setIsRight] = useState();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!isClickable || !hidden) return;
    setIsClickable(false);
    setHidden(false);
    const result = compareIds(id);
    setIsRight(result);
  };

  const classes = hidden ? "hidden" : isRight ? "success" : "fail";
  return (
    <div className={`game-card-item ${classes}`} id={id} onClick={handleClick}>
      <div className="card">
        <img
          src={
            hidden
              ? "https://media.giphy.com/media/Sh5hRVHLz9ssAvpi0P/giphy.gif?cid=ecf05e4708v3aaqtl8zwdje36uzq8jp42ov7nzqizzcl59bp&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              : url
          }
          className="card-img-top"
          alt={name}
        />
        {hidden ? (
          ""
        ) : (
          <div className="card-body">
            <p className="card-text">{name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCardItem;
