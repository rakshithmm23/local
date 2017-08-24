import React, { Component } from 'react';
import Button from '../common/Button';
import CustomScroll from 'react-custom-scroll';
import { Media } from 'react-bootstrap';
import { map, each, includes, truncate } from 'lodash';


export default class AcceptedQuotes extends Component {
  constructor(){
    super();
    this.state={
      imagesLeft:false,
      imagesRemaining:0,
      isVendorDescTruncated: true
    }

      this.AcceptedQuotes = [
        {
          vdImage: '../../images/car.jpg',
          vdName:'1. Shine Works',
          kmDetails:'2.5 kms',
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
              },
                {
                  photo :'../../images/test.jpg',
              },
              {
                  photo :'../../images/test.jpg',
              },
              {
                  photo :'../../images/test.jpg',
              },
              {
                  photo :'../../images/test.jpg',
              },
              {
                  photo :'../../images/test.jpg',
              },
              {
                  photo :'../../images/test.jpg',
              },
              {
                  photo :'../../images/test.jpg',
              },
              {
                  photo :'../../images/test.jpg',
              }
          ]
        }
      ];
    }
    componentDidMount() {
      if(this.AcceptedQuotes[0].vdPhoto.length>=7){
        this.setState({imagesLeft:true})
        let imagesRemaining = this.AcceptedQuotes[0].vdPhoto.length - 7
        this.setState({imagesRemaining:imagesRemaining})
      }
    }
    showText(val){
      if(val=="more"){
      this.setState({readMore:false})
      }else{
      this.setState({readMore:true})
      }
    }
  render() {
    const vendorDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus ut nibh ut lacinia. Nullam sit amet est in nisl tincidunt convallis. Donec consequat molestie dolor nec fringilla. Aliquam erat volutpat. Aenean imperdiet tellus in dolor commodo porttitor. Aenean auctor velit auctor, consectetur orci at, luctus tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis eleifend odio nulla, non tincidunt turpis tincidunt sed.';
    const truncatedvendorDesc = this.state.isVendorDescTruncated ? truncate(vendorDesc, {length: 130}) : vendorDesc;
    const AcceptedQuotesList = map(this.AcceptedQuotes, (item, key) => {
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
                <span className="mdi mdi-star" />
                <span className="mdi mdi-star" />
                <span className="mdi mdi-star" />
                <span className="mdi mdi-star-outline" />
                <span className="mdi mdi-star-outline" />
                <span className="rating-text">{item.ratingText} ({item.TotalRating} Reviews)</span>
              </div>
                <label>{item.vdAddress}</label>
                <label>{item.vdEmail}</label>
                <label>{item.vdPhone}</label>
                <Button btnType="btn-theme transparent alert-margin" btnSize="sm" customClass="timeline" fontSize={14} label="Get Directions" />
                <Button btnType="btn-theme transparent" btnSize="sm" customClass="timeline" fontSize={14} label="View Profile" />{/* vendor profile */}

            </div>
            <div className="figure no-top-padding">
              <h4>Photos</h4>
              <div className="photos-row">
                {map(item.vdPhoto, (item, key) => {
                  return(
                    <div className="upload-images" key={key}>
                      <img src={item.photo} alt=""/>
                      <span className="more-photos">+ 10 more</span>
                    </div>
                  );
                })}
              </div>
                {this.state.imagesLeft && <div className="upload-images wrap-photo" key={key}>
                      <img src="../../images/test.jpg" alt=""/>
                      <span className="more-photos">{"+ "+this.state.imagesRemaining+" more"}</span>
                    </div>}
                <p>{truncatedvendorDesc}</p>
                {this.state.isVendorDescTruncated && <label className="read_more" onClick={(e) => {e.preventDefault(); this.setState({'isVendorDescTruncated': false})}}>Read More</label>}
                {!this.state.isVendorDescTruncated && <label className="read_more" onClick={(e) => {e.preventDefault(); this.setState({'isVendorDescTruncated': true})}}>Read Less</label>}
            </div>
        </div>
      );
    });
    return(
        <div> {AcceptedQuotesList} </div>
    );
  }
}
