import React, { Component } from 'react';
import { map } from 'lodash';
import Slider from 'react-slick';
export default class Deals extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    const dealUrl = [
      {
        dealImg: '../../images/deals1.png',
      }, {
        dealImg: '../../images/deals2.png',
      }, {
        dealImg: '../../images/deals3.png',
      }, {
        dealImg: '../../images/img1.png',
      }, {
        dealImg: '../../images/img2.png',
      }, {
        dealImg: '../../images/img3.png',
      }, {
        dealImg: '../../images/deals1.png',
      }, {
        dealImg: '../../images/img2.png',
      }, {
        dealImg: '../../images/deals3.png',
      }
    ];
    const dealList = map(dealUrl, (item, key) => {
      return (
        <div className="col-md-4" key={key}>
          <div className="deal-img">
            <img src={item.dealImg} alt="" />
          </div>
        </div>
      );
    });
    return (
      <div className="row">
        <div className="deals-section">
          <div className="deals-heading text-center">
            <h5>Deals and Offers</h5>
            <p>Enjoy the best offers and discounts exclusively selected for your car needs.</p>
          </div>
          <div className="col-md-12 Deals-layout">
            <Slider {...settings}>
              {dealList}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
