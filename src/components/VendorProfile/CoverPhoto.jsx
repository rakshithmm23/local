import React, { Component } from 'react';

export default class CoverPhoto extends Component {
    render() {
        return (
            <div className="vendor-cover">
                <div className="cover-photo">
                    <img src="../images/car-banner.png" alt=""/>
                </div>
                <div className="vendor-profile-pic upload-pic">
                    <img src="../images/car-profilePic.jpg" alt=""/>
                    <a href="" className="profile-pic-upload">Upload Photo</a>
                </div>
            </div>
        );
    }
}
