export const TileTypes = {
  Empty: "empty",
  Occupied: "occupied",
  TileA: "tileA",
  TileB: "tileB",
  TileC: "tileC",
  TileD: "tileD",
};

export function createTiles(numTiles) {
  const tiles = [];
  const tileOptions = [
    TileTypes.TileA,
    TileTypes.TileB,
    TileTypes.TileC,
    TileTypes.TileD,
  ];

  // set the first tile to empty
  tiles.push(createTile(0, TileTypes.Empty));

  for (let i = 1; i < numTiles; i++) {
    // tiles.push(createTile(i, TileTypes.Occupied));
    tiles.push(
      createTile(i, tileOptions[Math.floor(Math.random() * tileOptions.length)])
    );
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

export function matchBottomRow(board, tilesToMatch) {
  // match tiles 12,13,14,15
  const tiles = board.slice(12);
  if (tilesToMatch.length !== tiles.length) {
    return false;
  }

  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].type !== tilesToMatch.type) {
      return false;
    }
  }
  return true;
}
