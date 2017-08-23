import React, { Component } from 'react';
import Button from '../common/Button';
import { Modal, Media } from 'react-bootstrap';
import { map, find } from 'lodash';
import moment from 'moment';

class BookServiceBox extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }
    render() {
        const {router}= this.props;
        // const formatedDate = this.props.updatedAt ? moment(this.props.updatedAt).format("DD MMM YY") : undefined;
        let coverImage = find(this.props.images, (img) => { return img.isCover == true });
        const carPhoto = coverImage ? coverImage.original : '/images/Car-Placeholder.jpg';
        return (
            <div className="col-md-4 col-sm-6 col-xs-12 bookService-card">
                <div className="myCar-card " onClick={(e) => {e.preventDefault(); this.props.router.push(`/car-profiles/${this.props.id}/view`)}}>
                    <figure>
                        {carPhoto && <img src={carPhoto} alt="" />}
                        <div className="myCar-card-footer">
                            <ul>
                                <li>
                                    <h4>Upcoming Service</h4>
                                    <span>Not Available</span>
                                </li>
                                <li>
                                    <span>
                                        <h4>model</h4>
                                        <span>{this.props.model} {this.props.year}</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </figure>
                    <figcaption className="myCar-card-caption">
                        <h4>{this.props.plateNo} {this.props.state}</h4>
                        <h5>{this.props.name}</h5>
                        <Button btnSize="sm" fontSize={14} label="Book Service" btnCallBack={this.props.btnCallBack} />
                    </figcaption>
                </div>

            </div>
        );
    }
}

export default BookServiceBox;
