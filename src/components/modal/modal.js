import { useState, useEffect } from "react";
import Button from "../game-button/game-button";
import useSound, { stopSound } from "../game-sounds/game-sounds";
import "./modal.css";

const Modal = ({
  showModal,
  score,
  allScore,
  gameSection,
  level,
  nextGame,
  setShowModal,
  setOpenModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(showModal);
  }, [showModal]);

  const closeModal = () => {
    setIsOpen(false);
    setShowModal(false);
    stopSound();
    setOpenModal(true);
  };

  const handleNextGame = () => {
    closeModal();
    nextGame();
    setOpenModal(false);
  };

  const levelStatus = level <= 5 ? "Easy" : level >= 7 ? "Medium" : "Hard";

  return (
    <div className="game-modal">
      <div
        className={`modal ${isOpen ? "show d-block" : "d-none"}`}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Congratulations Game over!🎉</h4>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            {allScore === 10 ? (
              <h1>
                <br />
                You've reached the highest score possible! 🎉 You've won the
                game! ✨
              </h1>
            ) : (
              <div className="modal-body">
                <p className="user-score">
                  Your score: {score} / {allScore}✨
                </p>
                <p>
                  Level: {levelStatus} - {level}
                </p>
                <p>Game Section: {gameSection}</p>
              </div>
            )}
            <div className="modal-footer">
              <Button name="close" type="button" onClick={closeModal} />
              <Button
                name="next game"
                type="button"
                classes={allScore === 10 ? "btn-disabled" : ""}
                onClick={handleNextGame}
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen && <div className="modal-backdrop show"></div>}
    </div>
  );
};

export default Modal;
