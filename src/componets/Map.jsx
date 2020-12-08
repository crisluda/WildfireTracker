import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox'

function Map({ eventData, center, zoom }) {
    const [locationInfo, setLocationInfo] = useState(null)
    const marker = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} key={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })
    return (
        <div className="Map">
            <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyCUn2SNqQq5stySK2RXE5Q2ozm7h2WAK20" }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {marker}
            </GoogleMapReact>
            {locationInfo && <locationInfoBox info={locationInfo} />}
        </div >
    )
}
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
