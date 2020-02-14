import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
        };
        return (
            <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{ lat: 23.046328, lng: 72.6803808}}

            >
                <Marker
                    position={{lat: 23.046328, lng: 72.6803808}} />
            </Map>
        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCnvj43t1RcxNbnsF2BU0TCg3RfaFezqAY'
})(MapContainer);
