import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import {StyledLocationMap} from "../../components/styles/locations-styles/LocationMap.styled";

function LocationMap({ location, address, contact, mapMarker, order="text" }) {
    return(
        <StyledLocationMap className={`${order === "text" ? "" : "image-first"}`}>
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
              <div className='info-address-tab-desk-position'>
                <p className='title'>{address.name}</p>
                <p>{address.line1}</p>
                <p>{address.line2}</p>
              </div>
              <div className='info-contact-tab-desk-position'>
                <p className='title'>Contact</p>
                <p>P: {contact.phone}</p>
                <p>M: {contact.email}</p>
              </div>
            </div>
      </StyledLocationMap>
    )
}

export default LocationMap;