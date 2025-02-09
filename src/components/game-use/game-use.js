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
  const [loading, setLoading] = useState(true);
  const handleLogin = (username) => {
    setLogin(username);
  };

  useEffect(() => {
    if (!startGame) return;
    setLoading(true);
    ImageApi.getImages(gameSection)
      .then((data) => {
        const currentData = data.splice(0, 3);
        setAllData([...data, ...data]);
        setScore(0);
        setGameLevel(3);
        setData(currentData);
      })
      .finally(() => setLoading(false));
  }, [gameSection]);

  useEffect(() => {
    if (!allData) return;

    setData(allData.splice(0, gameLevel));
  }, [gameLevel]);

  const handleStartGame = () => {
    setStartGame(true);
  };

  const handleGameMode = (mode) => {
    setGameSection(mode);
  };

  const handleNextGame = (section) => {
    if (section) setGameSection(section);
    setGameLevel((prevLevel) => (+prevLevel < 10 ? +prevLevel + 1 : 10));
    setScore(0);
  };

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

    game: {
      current: score,
      level: gameLevel,
      allScore: gameLevel,
      loading,
      gameSection,
      data,
      setScore,
      nextGame: handleNextGame,
      onSelect: handleGameMode,
    },
  };
};

export default useGame;
