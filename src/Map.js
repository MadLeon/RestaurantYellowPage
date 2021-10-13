import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map({ restaurant }) {
  return (
    <MapContainer
      style={{ height: "400px" }}
      center={[restaurant.address.coord[1], restaurant.address.coord[0]]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={[restaurant.address.coord[1], restaurant.address.coord[0]]}
      ></Marker>
    </MapContainer>
  );
}
