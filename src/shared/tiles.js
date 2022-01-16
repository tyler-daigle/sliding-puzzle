export const TileTypes = {
  Empty: "empty",
  Occupied: "occupied",
};

export function createTiles(numTiles) {
  const tiles = [];

  // set the first tile to empty
  tiles.push(createTile(0, TileTypes.Empty));

  for (let i = 1; i < numTiles; i++) {
    tiles.push(createTile(i, TileTypes.Occupied));
  }
  return tiles;
}

export function shuffleTiles(tiles) {
  const shuffled = [];
  // create a copy of the array
  tiles.forEach((tile) => shuffled.push({ ...tile }));

  let len = shuffled.length;
  while (len > 0) {
    // randomly select a tile
    const tileNum = Math.floor(Math.random() * len);
    let temp = shuffled[len - 1]; // save the last tile in the array
    shuffled[len - 1] = shuffled[tileNum]; // set random tile to the last one
    // move that tile to the end
    shuffled[tileNum] = temp; // move the previous last tile to the random position
    // shorten the length of the array
    len--;
  }
  return shuffled;
}

function createTile(val, tileType, src = "") {
  return { value: val, type: tileType, src };
}
