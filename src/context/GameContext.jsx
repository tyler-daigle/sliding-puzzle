import { createContext, useState, useEffect } from "react";
import { createTiles, shuffleTiles } from "../shared/tiles";

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [gameTiles, setGameTiles] = useState(null);

  const handleTileClick = (tileIndex, tile) => {
    // when a tile is clicked check the tiles surrounding it to
    // see if the empty tile is there. If it is just swap the positions.
    console.log(`Tile ${tile.value} clicked at position ${tileIndex}`);
  };

  useEffect(() => {
    const tiles = shuffleTiles(createTiles(16));
    setGameTiles(tiles);
  }, []);

  return (
    <GameContext.Provider value={{ gameTiles, handleTileClick }}>
      {children}
    </GameContext.Provider>
  );
}
