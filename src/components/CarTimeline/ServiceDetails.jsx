import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import {map} from 'lodash';

export default class ServiceDetails extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            plateNumber: "B 509234 Dubai",
            brand: "My Nissan GT-R",
            color: "Silver",
            year: "2016",
            upcomingService: "10500",
            date: "17 Mar '17",
            previousService: "8500",
        }
    }
    render() {
        return (
            <div className="service-details">
                {(this.props.images && this.props.images.length) ? <Carousel>
                  {map(this.props.images, (image, key) => {
                    return (
                      <Carousel.Item>
                          <img width={400} height={280} alt="" src={image.medium} />
                      </Carousel.Item>
                    )
                  })}
                </Carousel> : ''}
                <div className="service-car-info">
                    <div className="service-carPlate">
                        <h6>{this.props.plateNo} {this.props.state}</h6>
                        <h4>{this.props.name}</h4>
                        <span className="car-make">{this.props.model} - {this.props.year}</span>
                    </div>
                    <div className="service-info">
                        <Scrollbars className="timelineScroll">
                            <ul>
                                {this.props.mileage && <li>
                                    <h5>Mileage</h5>
                                    <span>{this.props.mileage} kms</span>
                                </li>}
                                {this.props.upcomingService && <li>
                                    <h5>Upcoming Service</h5>
                                    <span>{this.props.upcomingService} kms</span>
                                </li>}
                                {this.props.previousService && <li>
                                    <h5>Previous Service</h5>
                                    <span>Car wash: {this.props.date}, {this.props.previousService} kms</span>
                                </li>}
                            </ul>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        );
    }
}
