import { createContext, useState, useEffect } from "react";
import { createTiles, shuffleTiles } from "../shared/tiles";
import { TileTypes } from "../shared/tiles";

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [gameTiles, setGameTiles] = useState(null);

  const swapTiles = (tileAindex, tileBindex) => {
    const tiles = gameTiles.map((tile) => ({ ...tile }));
    let temp = tiles[tileAindex];
    tiles[tileAindex] = tiles[tileBindex];
    tiles[tileBindex] = temp;
    setGameTiles(tiles);

    console.log(`Swapping ${tileAindex} and ${tileBindex}`);
  };

  const handleTileClick = (tileIndex, tile) => {
    if (tile.type === TileTypes.Empty) return;
    // when a tile is clicked check the tiles surrounding it to
    // see if the empty tile is there. If it is just swap the positions.
    console.log(`Tile ${tile.value} clicked at position ${tileIndex}`);
    // tiles are in a 4 x 4 grid

    // check left tile
    // make sure there is a tile to the left - so as long as it isn't 0,4,8 or 12
    // use % 4 and check for remainder to figure that out
    if (tileIndex !== 0 && tileIndex % 4 !== 0) {
      if (gameTiles[tileIndex - 1].type === TileTypes.Empty) {
        swapTiles(tileIndex, tileIndex - 1);
        return true;
      }
    }

    // check right tiles - make sure not 3,7,11,15
    if (![3, 7, 11, 15].includes(tileIndex)) {
      if (gameTiles[tileIndex + 1].type === TileTypes.Empty) {
        swapTiles(tileIndex, tileIndex + 1);
        return true;
      }
    }

    // check below - make sure the tileIndex is less than 12
    if (tileIndex < 12) {
      if (gameTiles[tileIndex + 4].type === TileTypes.Empty) {
        swapTiles(tileIndex + 4, tileIndex);
        return true;
      }
    }
    // check above - subtract 4 to get the tile above
    if (tileIndex >= 3) {
      if (gameTiles[tileIndex - 4].type === TileTypes.Empty) {
        swapTiles(tileIndex, tileIndex - 4);
        return true;
      }
    }
    return false; // no empty tile was found near the one clicked
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
