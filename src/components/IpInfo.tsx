import {IAddress} from "./types/types"


interface info{
    addressInfo: IAddress | undefined;
}
export default function IpInfo({addressInfo}: info){

    return(
        <div className="blockInfo">
            <div className="blockInfo-item">
                <span className="blockInfo-item-title">Ip Address</span>
                <span className="blockInfo-item-info">{addressInfo?.ip}</span>
            </div>
            <div className="blockInfo-item">
                <span className="blockInfo-item-title">Location</span>
                <span className="blockInfo-item-info">{addressInfo?.location}</span>
            </div>
            <div className="blockInfo-item">
                <span className="blockInfo-item-title">Timezone</span>
                <span className="blockInfo-item-info">{addressInfo?.timezone}</span>
            </div>
            <div className="blockInfo-item">
                <span className="blockInfo-item-title">Isp</span>
                <span className="blockInfo-item-info">{addressInfo?.isp}</span>
            </div>
        </div>
    )
}