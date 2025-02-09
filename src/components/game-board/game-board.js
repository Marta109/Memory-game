import { useEffect, useState } from "react";
import GameCardWrapper from "../game-card-wrapper/game-card-wrapper";
import Header from "../game-header/game-header";
import Modal from "../modal/modal";
import Timer from "../timer/timer";
import Spinner from "../spinner/spinner";
import "./game-board.css";

const GameBoard = ({
  game: {
    current,
    allScore,
    gameSection,
    level,
    setScore,
    data,
    nextGame,
    onSelect,
    loading,
  },
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [showTimer, setShowTimer] = useState();
  const [showModal, setShowModal] = useState(false);
  const [section, setSection] = useState(false);

  useEffect(() => {
    setShowTimer(true);
    const timer = setTimeout(() => {
      setShowTimer(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="game-board">
      <Header
        score={current}
        allScore={allScore}
        level={level}
        gameSection={gameSection}
        openModal={openModal}
        setShowModal={setShowModal}
        setOpenModal={setOpenModal}
        setSection={setSection}
      />
      <div className="game-board-container">
        <Modal
          showModal={showModal}
          section={section}
          score={current}
          allScore={allScore}
          level={level}
          gameSection={gameSection}
          nextGame={nextGame}
          openModal={openModal}
          onSelect={onSelect}
          setShowModal={setShowModal}
          setOpenModal={setOpenModal}
          setSection={setSection}
        />

        {loading ? (
          <Spinner />
        ) : (
          <div className="board-grid">
            {showTimer && (
              <>
                <Timer />
                <div className="game-card-descr">
                  Remember the contents of the cards!
                </div>
              </>
            )}
            <GameCardWrapper
              setScore={setScore}
              score={current}
              data={data}
              modal={setShowModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GameBoard;
