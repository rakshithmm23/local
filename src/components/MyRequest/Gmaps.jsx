import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Gmaps extends Component {
    location(map){
        console.log(map.latLng.lat())
    }
    render() {
        const markers = this.props.markers.map((venue,i)=>{
            const marker = {
                position:{
                    lat:venue.location.lat,
                    lng:venue.location.lng
                }
            }
            return <Marker key={i} {...marker} onClick={this.location.bind(this)}/>
        })
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