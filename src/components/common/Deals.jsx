import React, {Component} from 'react';
import {map} from 'lodash';
export default class Deals extends Component {

  render() {
    const dealUrl = [
      {
        dealImg: './src/images/img1.png',
      }, {
        dealImg: './src/images/img2.png',
      }, {
        dealImg: './src/images/img3.png',
      }
    ];
  const dealList = map(dealUrl, (item, key) => {
      return (
         <div className="col-md-4" key={key}>
            <div className="deal-img">
              <img src={item.dealImg} alt=""/>
            </div>
        </div>
      );
    });
    return (
      <div className="row deals-section">
        <div className="deals-heading text-center">
          <h5>Deals and Offers</h5>
          <p>Enjoy the best offers and discounts exclusively selected for your car needs.</p>
        </div>
        <div className="col-md-12 Deals-layout">
             {dealList}
        </div>
      </div>
    );
  }
}
