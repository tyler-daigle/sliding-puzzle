import PuzzleBoard from "./PuzzleBoard";

import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function MainGame() {
  const { gameTiles } = useContext(GameContext);

  return (
    <div>
      <h1>Sliding Puzzle Game</h1>
      {gameTiles ? (
        <PuzzleBoard tiles={gameTiles} />
      ) : (
        <h2>Loading Puzzle...</h2>
      )}
    </div>
  );
}
