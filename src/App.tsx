import React, { useEffect, useState} from 'react';
import axios from 'axios';
 
import TrackerForm from './components/TrackerForm';
import Map from './components/Map';



const defaultPosition = {
  lat: 52.26815737376817,
  lng: 21.02783203125,
  zoom: 13
};
const apiKey = 'at_5s6URTKZrvRQEwjfCE7SepkWYG8vM';


function App() {
  const [position, setPosition] = useState<[number, number]>([defaultPosition.lat, defaultPosition.lng]);
  useEffect(()=>{
    axios({
      url: 'https://geo.ipify.org/api/v2/country,city',
      method: 'get',
      params: {
        apiKey: '',
        ipAddress: '',
      }
    }).then(res => {
      setPosition([res.data.location.lat, res.data.location.lng])
    })
  },[])

  return (
    <div className="App">
      <TrackerForm/>
      <Map position={position} zoom={defaultPosition.zoom}/>
    </div>
  );
}

export default App;
