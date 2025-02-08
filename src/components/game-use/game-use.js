import { useEffect, useState } from "react";
import ImageApi from "../../server/imageApi";

const useGame = () => {
  const [allData, setAllData] = useState();
  const [score, setScore] = useState(0);
  const [data, setData] = useState([]);
  const [isLogin, setLogin] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [gameLevel, setGameLevel] = useState("3");
  const [gameSection, setGameSection] = useState(null);
  const handleLogin = (username) => {
    setLogin(username);
  };

  useEffect(() => {
    if (!startGame) return;
    ImageApi.getImages(gameSection).then((data) => {
      setAllData(data);
      setScore(0);
      setData(allData.slice(0, 3));
    });
  }, [gameSection]);

  useEffect(() => {
    // if (+gameLevel === 3) return;
    // const itemsPerLevel = gameLevel;

    // const startIndex = gameLevel === 3 || gameLevel === 10 ? 0 : gameLevel;

    // setData(allData.slice(startIndex, startIndex + itemsPerLevel));
    setData(allData.slice(0, gameLevel));
    // console.log("startIndex=", startIndex);
    // console.log("last=", startIndex + itemsPerLevel);
  }, [gameLevel]);

  const handleStartGame = () => {
    setStartGame(true);
  };

  const handleGameMode = (mode) => {
    console.log(mode);
    setGameSection(mode);
  };

  const handleNextGame = (section) => {
    if (section) setGameSection(section);
    setGameLevel((prevLevel) => (+prevLevel < 10 ? +prevLevel + 1 : 10));
    setScore(0);
  };

  console.log(allData);
  console.log(data);

  return {
    login: {
      isLogin,
      handleLogin,
    },

    welcome: {
      user: isLogin,
      startGame,
      start: handleStartGame,
      onSelect: handleGameMode,
    },

    score: {
      current: score,
      level: gameLevel,
      allScore: gameLevel,
      gameSection,
      data,
      setScore,
      nextGame: handleNextGame,
    },
  };
};

export default useGame;
