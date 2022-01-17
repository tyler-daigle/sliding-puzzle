import PuzzleBoard from "./PuzzleBoard";
import MatchTiles from "./MatchTiles";

import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { TileTypes } from "../shared/tiles";

const tilesToMatch = [
  { type: TileTypes.TileA },
  { type: TileTypes.TileB },
  { type: TileTypes.TileC },
  { type: TileTypes.TileD },
];

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
      <MatchTiles tilesToMatch={tilesToMatch} />
    </div>
  );
}
