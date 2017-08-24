import React, { Component } from 'react';
import {truncate} from 'lodash';

export default class Description extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDescriptionTruncated: true
    }
  }
  render() {
    const descriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus ut nibh ut lacinia. Nullam sit amet est in nisl tincidunt convallis. Donec consequat molestie dolor nec fringilla. Aliquam erat volutpat. Aenean imperdiet tellus in dolor commodo porttitor. Aenean auctor velit auctor, consectetur orci at, luctus tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis eleifend odio nulla, non tincidunt turpis tincidunt sed.';
    const truncatedDescriptionText = this.state.isDescriptionTruncated ? truncate(descriptionText, {length: 250}) : descriptionText;
    return (
        <div>
            <div className="vendor-description">
                <h4>Description</h4>
                <p>{truncatedDescriptionText}</p>
                {this.state.isDescriptionTruncated && <label className="read_more" onClick={(e) => {e.preventDefault(); this.setState({'isDescriptionTruncated': false})}}>Read More</label>}
                {!this.state.isDescriptionTruncated && <label className="read_more" onClick={(e) => {e.preventDefault(); this.setState({'isDescriptionTruncated': true})}}>Read Less</label>}
            </div>
            <div className="row vendor-description">
                <h4>Facilities</h4>
                <ul className="vendor-facilities">
                    <li>Basic Wash</li>
                    <li>Interior Cleaning</li>
                    <li>Wash & Shine</li>
                    <li>Awsome Wash</li>
                    <li>Basic Wash</li>
                    <li>Interior Cleaning</li>
                    <li>Wash & Shine</li>
                    <li>Awsome Wash</li>
                </ul>
            </div>
        </div>
    );
  }
}
