import { useState, useEffect } from "react";
import Button from "../game-button/game-button";
import useSound, { stopSound } from "../game-sounds/game-sounds";
import "./modal.css";
import SelectSection from "../game-select-section/game-select-section";

const Modal = ({
  showModal,
  section,
  score,
  allScore,
  gameSection,
  level,
  nextGame,
  onSelect,
  setShowModal,
  setOpenModal,
  setSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newSection, setNewSection] = useState();

  useEffect(() => {
    setIsOpen(showModal);
  }, [showModal]);

  const closeModal = () => {
    setIsOpen(false);
    setShowModal(false);
    stopSound();
    if (!section) {
      setOpenModal(true);
    }
    setSection(false);
  };

  const handleClick = () => {
    if (allScore === 10) {
      onSelect("fantasy");
    } else if (section) {
      onSelect(newSection);
    } else {
      nextGame();
    }
    closeModal();
    setSection(false);
    setOpenModal(false);
  };

  const levelStatus = level < 5 ? "Easy" : level > 7 ? "Medium" : "Hard";

  let modalContent = (
    <div className="modal-body">
      <p className="user-score">
        Your score: {score} / {allScore}✨
      </p>
      <p>
        Level: {levelStatus} - {level}
      </p>
      <p>Game Section: {gameSection}</p>
    </div>
  );
  if (allScore === 10) {
    modalContent = (
      <div className="modal-body">
        <h4 className="game-won">
          <br />
          You've reached the highest score possible! <br /> You've won the game!
          🎉✨
        </h4>
      </div>
    );
  }

  if (section) {
    modalContent = <SelectSection onSelect={setNewSection} />;
  }

  return (
    <div className="game-modal">
      <div
        className={`modal ${isOpen ? "show d-block" : "d-none"}`}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {" "}
                {!section
                  ? "Congratulations Game over!🎉"
                  : "Select new section"}
              </h4>

              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            {modalContent}
            <div className="modal-footer">
              <Button
                name="close"
                type="button"
                onClick={closeModal}
                classes="modal-btn"
              />
              <Button
                name={
                  section
                    ? "change section"
                    : allScore === 10
                    ? "new game"
                    : "next game"
                }
                type="button"
                classes="modal-btn"
                onClick={handleClick}
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
