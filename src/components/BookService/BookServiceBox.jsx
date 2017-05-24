import React, { Component } from 'react';
import Button from '../common/Button';

class BookServiceBox extends Component {
    render() {
        return (
            <div className="box-holder col-md-4 ">
                <div className="">
                    <figure>
                        <img src="../../images/car.jpg" alt=""/>
                        <div className="heading">
                            <span className="us-title">upcoming service</span>
                            <span className="model-title">model</span>
                        </div>
                        <div className="value">
                            <span className="us">{this.props.date}</span>
                            <span className="model">{this.props.model}</span>
                        </div>
                    </figure>
                    <figcaption>
                        <h4>{this.props.place}</h4>
                        <h5>{this.props.name}</h5>
                        <Button  btnSize="sm" fontSize={13} label="Book Service" />
                    </figcaption>
                </div>
                
            </div>
        );
    }
}

export default BookServiceBox;