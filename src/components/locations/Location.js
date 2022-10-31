import React from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '@react-google-maps/api';

import LocationMap from "./LocationMap";

// This step is necessary in order to see the marker on the map
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Location() {
    return(
        <main>
            <LocationMap
                location="Canada"
                mapMarker={{
                lat: 43.6473546,
                long: -79.3756352,
                zoom: 13
                }}
                address={{
                    name: "Designo Central Office",
                    line1: "3886 Wellington Street",
                    line2: "Toronto, Ontario M9C 3J5"
                }}
                contact={{
                    phone: "+1 253-863-8967",
                    email: "contact@designo.co"
                }}
          />

          <LocationMap
                location="Australia"
                mapMarker={{
                lat: -30.3327692,
                long: 149.7847852,
                zoom: 15
                }}
                order="map"
                address={{
                name: "Designo AU Office",
                line1: "19 Balonne Street",
                line2: "New South Wales 2443"
                }}
                contact={{
                phone: "(02) 6720 9092",
                email: "contact@designo.au"
                }}
          />

          <LocationMap
                location="United Kingdom"
                mapMarker={{
                lat: 51.7189981,
                long: -3.8567393,
                zoom: 16
                }}
                address={{
                name: "Designo UK Office",
                line1: "13  Colorado Way",
                line2: "Rhyd-y-fro SA8 9GA"
                }}
                contact={{
                phone: "078 3115 1400",
                email: "contact@designo.uk"
                }}
          />
      </main>
    )
}

export default Location;