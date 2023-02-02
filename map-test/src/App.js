import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
// import * as parkData from "./data/skateboard-parks.json";
import L from 'leaflet';

function App() {
  const positions = [
    { long: 59.840236, lat: 17.650246 },
    { long: 49.840236, lat: 18.650246 },
    { long: 51.840236, lat: 19.650246 },
    { long: 69.840236, lat: 16.650246 },
    { long: 53.840236, lat: 20.650246 }
  ]

  const customIcon = new L.Icon({//creating a custom icon to use in Marker
    iconUrl: "http://www.clipartbest.com/cliparts/di7/ppB/di7ppBG9T.png",
    iconSize: [25, 25]
  });

  const getAllPins = () => {
    return positions.map((pos, index) => {
      return (
        <Marker key={index} position={[pos.long, pos.lat]} icon={customIcon}>
          <Popup>
            Linus Janssons Iphone
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
