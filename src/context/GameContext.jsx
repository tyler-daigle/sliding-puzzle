import { createContext, useState, useEffect } from "react";
import { createTiles, shuffleTiles } from "../shared/tiles";

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [gameTiles, setGameTiles] = useState(null);

  useEffect(() => {
    const tiles = shuffleTiles(createTiles(16));
    setGameTiles(tiles);
  }, []);

  return (
    <GameContext.Provider value={{ gameTiles }}>
      {children}
    </GameContext.Provider>
  );
}
