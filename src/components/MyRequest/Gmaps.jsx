import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Gmaps extends Component {
    render() {
        const markers = this.props.markers.map((venue,i)=>{
            const marker = {
                position:{
                    lat:venue.location.lat,
                    lng:venue.location.lng
                }
            }
            return <Marker key={i} {...marker} />
        })
        return (
            <div>
                <h4>this is map component</h4>
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