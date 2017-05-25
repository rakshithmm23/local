import React, { Component } from 'react';
import Button from '../common/Button';

class BookServiceBox extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="myCar-card">
                    <figure>
                        <img src="../../images/car.jpg" alt="" />
                        <div className="myCar-card-footer">
                            <ul>
                                <li>
                                    <h4>upcoming service</h4>
                                    <span>{this.props.date}</span>
                                </li>
                                <li>
                                    <h4>model</h4>
                                    <span>{this.props.model}</span>
                                </li>
                            </ul>
                        </div>
                    </figure>
                    <figcaption className="myCard-caption">
                        <h4>{this.props.place}</h4>
                        <h5>{this.props.name}</h5>
                        <Button btnSize="sm" fontSize={14} label="Book Service" />
                    </figcaption>
                </div>

            </div>
        );
    }
}

export default BookServiceBox;