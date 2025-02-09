import { useState } from "react";
import Button from "../game-button/game-button";
import SelectSection from "../game-select-section/game-select-section";
import "./welcome.css";

const Welcome = ({ welcome: { user, start, onSelect } }) => {
  const [select, setSelectedValue] = useState("animal");
  const handleStartGame = () => {
    onSelect(select);
    start();
  };

  return (
    <div className="welcome-container">
      <div className="welcome">
        <h2>Welcome, {user}!</h2>
        <h1 className="game-title">Memory game</h1>
        <div className="game-descr">
          Welcome to Memory Games!✨ This exciting game will help you improve
          your memory and attention💫.
          <br /> Your task is to choose the card that matches the given image or
          text.
          <br /> Stay focused, remember the details, and become a true memory
          master!
          <br />
          Ready to start🌠?
          <br />
          <SelectSection onSelect={setSelectedValue} />
        </div>
        <Button name={"start game"} type="button" onClick={handleStartGame} />
      </div>
    </div>
  );
};

export default Welcome;
