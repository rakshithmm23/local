import React, { Component } from 'react';

export default class CoverPhoto extends Component {
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
                    <div className="rating">
                        <span className="mdi mdi-star" />
                        <span className="mdi mdi-star" />
                        <span className="mdi mdi-star" />
                        <span className="mdi mdi-star-half" />
                        <span className="mdi mdi-star-outline" />
                    </div>
                    <h1>Buddy's Car Care</h1>
                    <span>Car Wash, Car Repair, Car Services</span>
                    <div className="vendor-share-profile">
                        <i className="mdi mdi-share-variant"/>
                        Share Profile
                    </div>
                </div>
            </div>
        );
    }
}
