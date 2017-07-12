import React, { Component } from 'react';
import { map } from 'lodash';
import Slider from 'react-slick';
export default class Deals extends Component {
  constructor(){
    super()
    this.state={
      slidesToShow:3
    }
  }

  componentDidMount() {
    debugger
    let width = document.getElementById('deals-section').offsetWidth;
    if(width<640){
      this.setState({slidesToShow:1});
    }

  }
  
  render() {
    let slideShow = this.state.slidesToShow;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slideShow,
      slidesToScroll: 1
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
      <div className="row" >
        <div className="deals-section" id="deals-section">
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
