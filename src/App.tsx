import React, { useEffect, useState} from 'react';
import axios from 'axios';
 
import TrackerForm from './components/TrackerForm';
import Map from './components/Map';
import IpInfo from './components/IpInfo';

import { IAddress } from './components/types/types';



const apiKey = 'at_5s6URTKZrvRQEwjfCE7SepkWYG8vM';

function App() {

  const [position, setPosition] = useState<[number, number]>();
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
      <Map position={position}/>
    </div>
  );
}

export default App;
