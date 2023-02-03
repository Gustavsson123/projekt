import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
// import * as parkData from "./data/skateboard-parks.json";

function App() {
  const positions = [
    { long: 59.840236, lat: 17.650246, info: "Nti Uppsala" },
    { long: 17.840236, lat: 12.450246, info: "Lorem" },
    { long: 51.840236, lat: 19.650246, info: "Lorem3" },
    { long: 69.840236, lat: 16.650246, info: "Lorem5" },
    { long: 53.840236, lat: 120.650246, info: "Test" },
    { long: 39.027871, lat: 125.707641, info: "Nordkorea" }
  ]

  const getAllPins = () => {
    return positions.map((pos, index) => {
      return (
        <Marker key={index} position={[pos.long, pos.lat]}>
          <Popup>
            {pos.info}
          </Popup>
        </Marker>
      )
    })
  }

  return (
    <div className="leaflet-container">
      <MapContainer center={[59.840236, 17.650246]} minZoom={3} zoom={4}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {getAllPins()}
      </MapContainer>

    </div>

  );
}

export default App;
