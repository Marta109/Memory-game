import Login from "../login/login";
import Welcome from "../welcome/welcome";
import useGame from "../game-use/game-use";
import GameBoard from "../game-board/game-board";
import "./app.css";

function App() {
  const {
    login: { isLogin, handleLogin },
    welcome,
    game,
  } = useGame();
  return (
    <div className="App">
      {!isLogin ? (
        <Login handleLogin={handleLogin} />
      ) : !welcome.startGame ? (
        <Welcome welcome={welcome} />
      ) : (
        <GameBoard game={game} />
      )}
    </div>
  );
}

export default App;
