import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { map } from 'lodash';
import { Media } from 'react-bootstrap';

class Gmaps extends Component {
    constructor() {
        super()
        this.state = {
            activeInfoWindow: null
        }
    }
    mouseLeave(){
        this.setState({activeInfoWindow: null})
    }

    render() {
        let mapRes = null;
        if(this.props.markers == undefined){
            mapRes=undefined;
        }else if(this.props.markers.jobCardLocation != undefined ){
             mapRes = this.props.markers.jobCardLocation 
        }else{
            mapRes = this.props.markers 
        }
        
        const markers =  mapRes?map(mapRes, (val, i) => {
            const marker = {
                position: {
                    lat: val.lat,
                    lng: val.lng
                }
            }
            return <Marker key={i} {...marker}  onMouseOver={() => this.setState({ activeInfoWindow: i }) } onMouseOut={() => {this.mouseLeave()} } onClick={this.props.markerClick}
                icon={{
                    url: val.pinImage
                }}
            />;
        }) :""
        let mapSettings = {
            defaultZoom: this.props.zoom,
            defaultCenter: this.props.center
        }
        if (this.props.setCenter) {
            mapSettings["center"] = this.props.center;
        }
        return (
            <div>
                <GoogleMap
                    {...mapSettings}
                >
                    {markers}
                    {this.props.markers ? map(mapRes, (val, i) => {
                        if (i == this.state.activeInfoWindow) {
                            return (
                                this.props.infoPopUp?
                                <InfoWindow  options={{pixelOffset: new google.maps.Size(0,-40),maxWidth: 327}} defaultPosition={{ lat: val.lat, lng: val.lng }} key={i}>
                                    <Media>
                                        <Media.Left>
                                            <img width={100} height={75} src="../../images/car.jpg" alt="Image" />
                                        </Media.Left>
                                        <Media.Body>
                                            <Media.Heading>{val.name}</Media.Heading>
                                            <div className="rating">
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="rating-text">{val.rating} ({val.review} reviews)</span>
                                            </div>
                                            <span className="distance">{val.distance} km</span>
                                        </Media.Body>
                                    </Media>
                                </InfoWindow>:""
                            )
                        }
                    }) : ""}
                </GoogleMap>
            </div>
        );
    }
}

export default withGoogleMap(Gmaps);
