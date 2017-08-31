import React, { Component } from 'react';

export default class CoverPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavouriteVisible: false,
        };
    }
    render() {
        return (
            <div className="vendor-cover">
                <div className="cover-photo">
                    <img src="../images/car-banner.png" alt="" />
                </div>
                <div className="vendor-profile-pic upload-pic">
                    <img src="../images/car-profilePic.jpg" alt="" />
                    <a href="" className="profile-pic-upload">Upload Photo</a>
                </div>
                <div className="vendor-cover-header">
                    <div className="rating rating-left">
                        <span className="mdi mdi-star" />
                        <span className="mdi mdi-star" />
                        <span className="mdi mdi-star" />
                        <span className="mdi mdi-star-half" />
                        <span className="mdi mdi-star-outline" />
                    </div>
                    <h1>Buddy's Car Care</h1>
                    <span>Car Wash, Car Repair, Car Services</span>
                    <div className="vendor-share-profile">
                        <i className={this.state.isFavouriteVisible ? "mdi mdi-heart" : "mdi mdi-heart-outline"} onClick={(e) => { e.preventDefault(); this.setState({ 'isFavouriteVisible': !this.state.isFavouriteVisible }); }} />
                        <i className="mdi mdi-share-variant" />
                    </div>
                </div>
            </div>
        );
    }
}
