import React, { useEffect, useState } from 'react'
import { Marker, Popup } from 'react-leaflet';

export default function Markers(): JSX.Element {
    // const [dataResponse, setDataResponse] = useState<any[]>([])

    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch('http://localhost:3000/api/getData');
    //         const data = await response.json();
    //         setDataResponse(data);
    //     }
    //     getData();
    // }, [])

    // const getAllPositions = () => {
    //     const position: any[] = []
    //     dataResponse.map((data) => {
    //         const rawData = data.coordinates.split(",");
    //         if (rawData[0] || !rawData[1]) {
    //             position.push([rawData[0], rawData[1]])
    //         }
    //     })
    //     return (position);
    // }
    // console.log("get all positions", getAllPositions())

    return (
        <>
            {/* {dataResponse.map((data) => (
                <Marker position={data.coordinates.split(",")}>
                    <Popup>
                        {data.name}
                    </Popup>
                </Marker>
            ))} */}
        </>
    )
}