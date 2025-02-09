import { useState } from "react";
import Button from "../game-button/game-button";
import "./game-header.css";
import { toggleMute } from "../game-sounds/game-sounds";
const Header = ({
  score,
  allScore,
  gameSection,
  level,
  openModal,
  setSection,
  setShowModal,
}) => {
  const [isMuted, setIsMuted] = useState(false);

  const levelStatus = level < 5 ? "Easy" : level > 7 ? "Medium" : "Hard";

  const handelSound = () => {
    toggleMute();
    setIsMuted(!isMuted);
  };

  const handelModal = () => {
    setShowModal(true);
    // setOpenModal(true);
  };

  const handelSelect = () => {
    setShowModal(true);
    setSection(true);
  };

  return (
    <header>
      <div className="card header-wrapper">
        <div className="card-header">
          <div className="header-descr-main">
            <Button
              type="button"
              name="change section"
              classes="btn-header"
              onClick={handelSelect}
            />

            <h1 className="card-title">Memory Game</h1>
            <Button
              type="button"
              name="open modal"
              // onClick={handelModal}
              classes={`btn-header ${!openModal ? "btn-disabled" : ""}`}
              onClick={handelModal}
            />
          </div>
          <div className="header-descr">
            <p className="card-level">
              Level: {levelStatus} - {level}
            </p>
            <p>section: {gameSection} </p>
            <p className="card-score">
              Score: {score} / {allScore}
            </p>
            <Button
              type="button"
              name={
                !isMuted ? (
                  <i className="fa-solid fa-volume-high"></i>
                ) : (
                  <i className="fa-solid fa-volume-mute"></i>
                )
              }
              onClick={handelSound}
              classes="btn-header sound"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
