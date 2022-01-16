export default function Tile({ tile, index }) {
  return (
    <div>
      <h1>
        {tile.value} {index}
      </h1>
    </div>
  );
}
