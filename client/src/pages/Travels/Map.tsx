import { MapContainer, TileLayer, useMap } from "react-leaflet";

/**
 * @returns leaflet map centered on Berlin
 */
function Map() {
  return (
    <MapContainer center={[52.52, 13.405]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
