import React, { Component } from 'react';
// import { map } from 'lodash';
class CarLogo extends Component {
    render() {
        // const carLogo = ["../../images/logo1.png", "../../images/logo2.png", "../../images/logo3.png"]

        return (
            <div className="col-md-2 image-view" >
                <div className={this.props.active ? "img-circle active" : "img-circle"} onClick={this.props.activeClick}>
                    <img src={this.props.imgUrl} alt="" />
                </div>
                <h6>{this.props.carName}</h6>
            </div>

        );
    }
}

export default CarLogo;