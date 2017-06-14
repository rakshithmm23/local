import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { map } from 'lodash'

class Gmaps extends Component {
    
    render() {
        let mapRes = null;
        { this.props.markers.jobCardLocation == undefined ? mapRes = this.props.markers : mapRes = this.props.markers.jobCardLocation }
        const markers = this.props.markers ? map(mapRes, (val, i) => {
            const marker = {
                position: {
                    lat: val.lat,
                    lng: val.lng
                }
            }
            return <Marker key={i} {...marker} onClick={this.props.markerClick}
                icon={{
                    url: val.pinImage
                }}
            />;
        }) : null;
        let mapSettings = {
            defaultZoom: this.props.zoom,
            defaultCenter: this.props.center
        }
        if(this.props.setCenter) {
            mapSettings["center"] = this.props.center;
        }
        return (
            <div>
                <GoogleMap                    
                    {...mapSettings}
                     >
                    
                    {markers}

                </GoogleMap>
            </div>
        );
    }
}

export default withGoogleMap(Gmaps);
