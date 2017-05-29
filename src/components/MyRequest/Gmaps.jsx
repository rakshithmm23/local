import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Gmaps extends Component {

    render() {
        const markers = this.props.markers.jobCardLocation.map((val, i) => {
            const marker = {
                position: {
                    lat: val.lat,
                    lng: val.lng
                }
            }
        //debugger
            return <Marker key={i} {...marker} onClick={this.props.markerClick}
                icon={{
                    url: val.pinImage
                }}
            />;
        });
        return (
            <div>
                <GoogleMap
                    defaultZoom={this.props.zoom}
                    defaultCenter={this.props.center}>
                    {markers}
                </GoogleMap>
            </div>
        );
    }
}

export default withGoogleMap(Gmaps);
