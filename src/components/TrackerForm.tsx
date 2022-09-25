
export default function TrackerForm(){

    return(
        <section className="tracker">
            <h1>IP Address Tracker</h1>
            <form className="tracker-form" onSubmit={e => e.preventDefault()}>
                <input placeholder="Search for any IP address or domain" name="ip"></input>
                <button type="submit">{'>'}</button>
            </form>
        </section>
    )
}