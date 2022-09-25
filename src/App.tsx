import React, { useEffect, useState} from 'react';
import axios from 'axios';
 
import TrackerForm from './components/TrackerForm';
import Map from './components/Map';
import IpInfo from './components/IpInfo';

import { IAddress } from './components/types/types';


const defaultPosition = {
  lat: 52.26815737376817,
  lng: 21.02783203125,
  zoom: 13
};
const apiKey = 'at_5s6URTKZrvRQEwjfCE7SepkWYG8vM';

function App() {
  
  const [position, setPosition] = useState<[number, number]>([defaultPosition.lat, defaultPosition.lng]);
  const [addressInfo, setAddressInfo] = useState<IAddress | undefined>();
  const [ip, setIp] = useState<number | undefined>();

  useEffect(()=>{
    axios({
      url: 'https://ipapi.co/json',
      method: 'get'
    }).then(res => setIp(res.data.ip))
  },[]);

  function findIpData(ipAddress: number){
    axios({
      url: 'https://geo.ipify.org/api/v2/country,city',
      method: 'get',
      params: {
        apiKey: apiKey,
        ipAddress: ipAddress,
      }
    }).then(res => {
      setPosition([res.data.location.lat, res.data.location.lng]);
      setAddressInfo({
        ip: res.data.ip,
        location: res.data.location.region + ', ' + res.data.location.city,
        timezone: res.data.location.timezone,
        isp: res.data.isp,
      })
    })
  }

  return (
    <div className="App">
      <TrackerForm ip={ip} findIpData={findIpData}/>
      <IpInfo addressInfo={addressInfo}/>
      <Map position={position} zoom={defaultPosition.zoom}/>
    </div>
  );
}

export default App;
