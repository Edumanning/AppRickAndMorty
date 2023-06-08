import './styles/locationInfo.css'

function LocationInfo({location}) {
    return (
        <article className="location__container">
            <h2 className='location__title'>{location?.name}</h2>
            <ul className="location__ul">
                <li><span className="location__span">Type </span><span>{location?.type}</span></li>
                <li><span className="location__span">Dimension </span><span>{location?.dimension}</span></li>
                <li><span className="location__span">Population </span><span>{location?.residents.length}</span></li>
            </ul>
        </article>
    )
}

export default LocationInfo
