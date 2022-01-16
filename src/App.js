import "./App.css";
import GameContextProvider from "./context/GameContext";
import MainGame from "./Components/MainGame";

function App() {
  return (
    <GameContextProvider>
      <MainGame />
    </GameContextProvider>
  );
}

export default App;
