import React, { Component } from 'react';
import Button from '../common/Button';
import { Scrollbars } from 'react-custom-scrollbars';
import { Media } from 'react-bootstrap';
import { map, each, includes } from 'lodash';

export default class AcceptedQuotes extends Component {
  render() {
     const AcceptedQuotes = [
        {
          vdImage: '../../images/car.jpg',
          vdName:'1. Shine Works',
          kmDetails:'2.5kms',
          ratingText:3.2,
          TotalRating:3,
          vdAddress:'29 Airport Road, Doha 00150, Qatar',
          vdEmail:'shineworks@shineworks.com',
          vdPhone:'+971 919 233 470',
          vdPhoto :[
              {
                  photo :'../../images/test.jpg',
              },
              {
                  photo :'../../images/test.jpg',
              },
              {
                  photo :'../../images/test.jpg',
              }
          ],
          PhotoDesc :'Lorem ipsum dolor sit amet, vim aperiam assentior moderatius an, eum facilisi pericula ea. Pro ut abhorreant intellegam, at est tota el..',
        }
     ]

    const AcceptedQuotesList = map(AcceptedQuotes, (item, key) => {
      return(
        <div className="vendorDetails" key={key}>
            <div className="vd-heading">
              <h5>Vendor Details</h5>
            </div>
            <div className="vd-img">
              <img src={item.vdImage} alt=""/>
            </div>
            <div className="vd-address">
              <h5>{item.vdName}</h5>
              <span className="km-details">{item.kmDetails}</span>
              <div className="rating">
                <span className="mdi mdi-star-outline" />
                <span className="mdi mdi-star-outline" />
                <span className="mdi mdi-star-outline" />
                <span className="mdi mdi-star-outline" />
                <span className="mdi mdi-star-outline" />
                <span className="rating-text">{item.kmDetails} ({item.TotalRating} Reviews)</span>
              </div>
                <label>{item.vdAddress}</label>
                <label>{item.vdEmail}</label>
                <label>{item.vdPhone}</label>
                <Button btnType="btn-alert alert-margin" btnSize="sm" customClass="timeline" fontSize={14} label="Get Directions" />
                <Button btnType="btn-alert" btnSize="sm" customClass="timeline" fontSize={14} label="View Profile" />
            </div>
            <div className="figure no-top-padding">
                <h4>Photos</h4>
                {map(item.vdPhoto, (item, key) => {
                  return(
                    <div className="upload-images" key={key}>
                      <img src={item.photo} alt=""/>
                    </div>
                  );
                })}
                <p>{item.PhotoDesc}</p>
                <label className="read_more">Read More</label>
            </div>
        </div>
      );
    });
    return(
        <div> {AcceptedQuotesList} </div>
    );
  }
}
