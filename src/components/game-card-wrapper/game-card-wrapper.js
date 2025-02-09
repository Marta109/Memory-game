import { useState, useEffect } from "react";
import GameCardItem from "../game-card-item/game-card-item";
import RandomCard from "../game-card-random/game-card-random";
import correctSound from "../../sounds/correctSound.mp3";
import wrongSound from "../../sounds/wrongSound.mp3";
import winSound from "../../sounds/winSound.mp3";
import useSound, { playSound } from "../game-sounds/game-sounds";
import "./game-card-wrapper.css";

const GameCardWrapper = ({ setScore, data, modal }) => {
  const [dataCopy, setDataCopy] = useState([...data]);
  const [randomCard, setRandomCard] = useState(null);

  const getRandomCard = () => {
    if (dataCopy.length === 0) return;
    const randomIndex = Math.floor(Math.random() * dataCopy.length);
    const randomCardCopy = { ...dataCopy[randomIndex] };

    setDataCopy((prevData) =>
      prevData.filter((el) => el.id !== randomCardCopy.id)
    );
    setRandomCard(randomCardCopy);
  };

  useEffect(() => {
    setDataCopy([...data]);
    setRandomCard(null);
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getRandomCard();
    }, 10000);

    return () => clearTimeout(timer);
  }, [dataCopy]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     getRandomCard();
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, []);

  const handleEndGame = () => {
    if (dataCopy.length === 0) {
      setTimeout(() => {
        playSound(winSound);
        modal(true);
      }, 1000);

      setRandomCard("");
    }
  };

  const compareIds = (cardId) => {
    if (cardId === randomCard?.id) {
      playSound(correctSound);
      setScore((prevScore) => prevScore + 1);
      getRandomCard();
      handleEndGame();
      return true;
    } else {
      playSound(wrongSound);
      setDataCopy((dataCopy) => dataCopy.filter((el) => el.id !== cardId));
      handleEndGame();
      return false;
    }
  };

  const elements = data.map((el) => (
    <GameCardItem
      key={el.id}
      url={el.urls.small}
      name={el.alt_description}
      id={el.id}
      compareIds={compareIds}
    />
  ));

  return (
    <div className="game-cards-wrapper">
      <div className="game-cards">{elements}</div>
      {randomCard === "" ? (
        ""
      ) : (
        <div className="random-card">
          <RandomCard cardData={randomCard} />
        </div>
      )}
    </div>
  );
};

export default GameCardWrapper;
