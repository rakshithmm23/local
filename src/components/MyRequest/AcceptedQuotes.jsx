import React, { Component } from 'react';
import Button from '../common/Button';
import { Scrollbars } from 'react-custom-scrollbars';
import { Media } from 'react-bootstrap';



export default class AcceptedQuotes extends Component {
  render() {
    return(
      <div className="vendorDetails">
        <div className="vd-heading">
          <h5>Vendor Details</h5>
        </div>
        <div className="vd-img">
          <img src="images/car.jpg" alt=""/>
        </div>
        <div className="vd-address">
          <h5>1. Shine Works</h5>
          <span className="km-details">2. 5 kms</span>
          <div className="rating">
            <span className="mdi mdi-star-outline" />
            <span className="mdi mdi-star-outline" />
            <span className="mdi mdi-star-outline" />
            <span className="mdi mdi-star-outline" />
            <span className="mdi mdi-star-outline" />
            <span className="rating-text">3.2 (23 Reviews)</span>
          </div>
            <label>29 Airport Road, Doha 00150, Qatar</label>
            <label>shineworks@shineworks.com</label>
            <label>+971 919 233 470</label>
            <Button btnType="btn-alert alert-margin" btnSize="sm" customClass="timeline" fontSize={14} label="Get Directions" />
            <Button btnType="btn-alert" btnSize="sm" customClass="timeline" fontSize={14} label="View Profile" />
        </div>
        <div className="figure no-top-padding">
            <h4>Photos</h4>
            <div className="upload-images">
              <img src="../../images/test.jpg" alt=""/>
            </div>
            <div className="upload-images">
              <img src="../../images/test.jpg" alt=""/>
            </div>
            <div className="upload-images">
              <img src="../../images/test.jpg" alt=""/>
            </div>
             <div className="upload-images">
              <img src="../../images/test.jpg" alt=""/>
            </div>
             <div className="upload-images">
              <img src="../../images/test.jpg" alt=""/>
            </div>
             <div className="upload-images">
              <img src="../../images/test.jpg" alt=""/>
            </div>
             <div className="upload-images">
              <img src="../../images/test.jpg" alt=""/>
            </div>
             <div className="upload-images">
              <img src="../../images/test.jpg" alt=""/>
            </div>
             <div className="upload-images">
              <img src="../../images/test.jpg" alt=""/>
            </div>
            <p>Lorem ipsum dolor sit amet, vim aperiam assentior moderatius an, eum facilisi pericula ea. Pro ut abhorreant intellegam, at est tota el..</p>
            <label className="read_more">Read More</label>
        </div>
      </div>
    );
  }
}
