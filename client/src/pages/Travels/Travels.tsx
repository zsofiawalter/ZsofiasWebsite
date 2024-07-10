import { useState } from "react";

import InputForm from "../../components/InputForm";
import Map from "./Map";

function Travels() {
  let [label, setLabel] = useState("");
  let [latitude, setLatitude] = useState<number>();
  let [longitude, setLongitude] = useState<number>();

  let numInputSize = 18;
  let numInputStep = 0.001;
  let longitudeRange = [-180, 180];
  let latitudeRange = [-90, 90];

  return (
    <div className="travels page">
      <h2>Travels</h2>
      <InputForm header="add a new location">
        <input
          type="text"
          placeholder="label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          size={9}
        />
        <input
          type="number"
          placeholder="lat"
          value={latitude}
          onChange={(e) => setLatitude(Number(e.target.value))}
          step={numInputStep}
          size={numInputSize}
          min={latitudeRange[0]}
          max={latitudeRange[1]}
        />
        <input
          type="number"
          placeholder="long"
          value={longitude}
          onChange={(e) => setLongitude(Number(e.target.value))}
          step={numInputStep}
          size={numInputSize}
          min={longitudeRange[0]}
          max={longitudeRange[1]}
        />
      </InputForm>
      <Map />
    </div>
  );
}

export default Travels;
