interface FormInterface{
    ip: number | undefined,
    findIpData: (ipAddress: number) => void,
}

export default function TrackerForm({ip, findIpData}: FormInterface){

    function formSubmit(e: any){
        e.preventDefault();
        findIpData(e.target.ip.value);
    }

    return(
        <section className="tracker">
            <h1>IP Address Tracker</h1>
            <form className="tracker-form" onSubmit={e => formSubmit(e)}>
                <input placeholder="Search for any IP address or domain" name="ip" defaultValue={ip}></input>
                <button type="submit">{'>'}</button>
            </form>
        </section>
    )
}