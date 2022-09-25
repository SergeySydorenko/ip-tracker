import { MapContainer, TileLayer, useMap, Marker} from 'react-leaflet';

interface position {
    position: [number, number]
}

function SetView({position }: position) {
    const map = useMap();
    map.panTo(position)
    return null
}

const defaultPosition: [number,number] = [52.26815737376817, 21.02783203125];


interface MapPosition {
    position?: [number, number],
    zoom?: number,
}

export default function Map({position, zoom}: MapPosition){
    return(
        <div id="map">
            <MapContainer 
            center={position ? position : defaultPosition} 
            zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {position ? 
                    <Marker position={position}/>
                    : null
                }
                {position ? 
                    <SetView position={position}/>
                    : null
                }
            </MapContainer>
        </div>
    )
}