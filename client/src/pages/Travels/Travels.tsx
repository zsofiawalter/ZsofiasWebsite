import LocationInputForm from "./LocationInput";
import Map from "./Map";

/**
 * @returns travels page with header, location input form, and leaflet map
 */
function Travels() {
  return (
    <div className="travels page">
      <h2>Travels</h2>
      <LocationInputForm></LocationInputForm>
      <Map />
    </div>
  );
}

export default Travels;
