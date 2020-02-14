import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class TxGoogleMap extends React.Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
        };
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
})(TxGoogleMap);
