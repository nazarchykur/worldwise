import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [serchParams, setSearchParams] = useSearchParams();

  const lat = serchParams.get("lat");
  const lng = serchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <p>
        Positions: {lat}, {lng}
      </p>
      <button onClick={() => setSearchParams({ lat: 20, lng: 30 })}>
        change position
      </button>
    </div>
  );
}

export default Map;
