import { TileTypes } from "../shared/tiles";
import styles from "../style/MatchTiles.module.css";

export default function MatchTiles({ tilesToMatch }) {
  return (
    <div className={styles.matchTileContainer}>
      {tilesToMatch.map((tile) => {
        let tileClasses;

        if (tile.type === TileTypes.TileA) {
          tileClasses = `${styles.tileA} ${styles.matchTile}`;
        } else if (tile.type === TileTypes.TileB) {
          tileClasses = `${styles.tileB} ${styles.matchTile}`;
        } else if (tile.type === TileTypes.TileC) {
          tileClasses = `${styles.tileC} ${styles.matchTile}`;
        } else if (tile.type === TileTypes.TileD) {
          tileClasses = `${styles.tileD} ${styles.matchTile}`;
        }

        return <div className={tileClasses}></div>;
      })}
    </div>
  );
}
