import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/login.css';

export default class CarouselSlider extends Component {

    render() {
        return (
            <div className="col-md-6 col-sm-6 col-xs-12 pad0">
                <div className="login-banner">
                    <a href="index.html" className="logo absolute" />
                    <Carousel interval={0}>
                        <Carousel.Item>
                            <img src="../images/signIn-banner.png" alt="" />
                            <Carousel.Caption>
                                Get your car repaired in XX hours
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="../images/signIn-banner.png" alt="" />
                            <Carousel.Caption>
                                Get your car repaired in XX hours
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="../images/signIn-banner.png" alt="" />
                            <Carousel.Caption>
                                Get your car repaired in XX hours
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}
