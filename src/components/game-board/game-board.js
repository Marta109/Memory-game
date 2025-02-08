import { useEffect, useState } from "react";
import GameCardWrapper from "../game-card-wrapper/game-card-wrapper";
import Header from "../game-header/game-header";
import Modal from "../modal/modal";
import Timer from "../timer/timer";
import "./game-board.css";

const GameBoard = ({
  score: { current, allScore, gameSection, level, setScore, data, nextGame },
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [showTimer, setShowTimer] = useState();
  const [showModal, setShowModal] = useState(false);


  // useEffect(() => {
  //   if (openModal) {
  //     setShowModal(true);
  //   }
  // }, [openModal]);

  // useEffect(() => {
  //   setShowModal(isOpenModal);
  // }, [isOpenModal]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowTimer(false);
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    setShowTimer(true);
    const timer = setTimeout(() => {
      setShowTimer(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="game-board">
      <Modal
        showModal={showModal}
        score={current}
        allScore={allScore}
        level={level}
        gameSection={gameSection}
        nextGame={nextGame}
        openModal={openModal}
        setShowModal={setShowModal}
        setOpenModal={setOpenModal}
        />
      <Header
        score={current}
        allScore={allScore}
        level={level}
        gameSection={gameSection}
        openModal={openModal}
        setShowModal={setShowModal}
        setOpenModal={setOpenModal}
      />
      <div className="board-grid">
        {showTimer && <Timer />}
        <GameCardWrapper
          setScore={setScore}
          score={current}
          data={data}
          modal={setShowModal}
        />
      </div>
    </div>
  );
};

export default GameBoard;
