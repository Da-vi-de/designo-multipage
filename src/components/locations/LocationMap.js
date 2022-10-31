import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import {StyledLocationMap} from "../../components/styles/locations/LocationMap.styled";

function LocationMap({ location, address, contact, mapMarker }) {
    return(
        <StyledLocationMap>
            <MapContainer zoom={mapMarker.zoom} center={[mapMarker.lat, mapMarker.long]}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[mapMarker.lat, mapMarker.long]}
              >
                <Popup><p>{address.name}</p></Popup>
            </Marker>
            </MapContainer>
            <div className="info">
              <h2>{location}</h2>
              <div>
                <p className='title'>{address.name}</p>
                <p>{address.line1}</p>
                <p>{address.line2}</p>
              </div>
              <div>
                <p className='title'>Contact</p>
                <p>P: {contact.phone}</p>
                <p>M: {contact.email}</p>
              </div>
            </div>
      </StyledLocationMap>
    )
}

export default LocationMap;