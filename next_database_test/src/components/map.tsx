import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import Markers from './Markes';

const inter = Inter({ subsets: ['latin'] })

export default function Map() {

    return (
        <>
            <MapContainer center={[59.840236, 17.650246]} zoom={13} style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers />

            </MapContainer>

            {/* {dataResponse.map((data) => (

      ))
      } */}

        </>
    )
}
