import { MapContainer, TileLayer, useMap, Marker} from 'react-leaflet';

interface MapPosition {
    position: [number, number],
    zoom?: number,
}

function SetView({position }: MapPosition) {
    const map = useMap();
    map.panTo(position)
    return null
}

export default function Map({position, zoom}: MapPosition){
    return(
        <div id="map">
            <MapContainer 
            center={position} 
            zoom={zoom} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                </Marker>
                <SetView position={position}/>
            </MapContainer>
        </div>
    )
}