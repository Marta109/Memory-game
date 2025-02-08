import { useState, useEffect } from "react";
import timerSound from "../../sounds/timerSound.mp3";
import useSound, { playSound } from "../game-sounds/game-sounds";
import "./timer.css";

const Timer = ({ second = 10 }) => {
  const [seconds, setSeconds] = useState(second);

  useEffect(() => {
    const timer = setInterval(() => {
      playSound(timerSound);
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer">
      {seconds > 0
        ? `${second} : ${seconds >= 10 ? seconds : "0" + seconds} `
        : ""}
    </div>
  );
};

export default Timer;
