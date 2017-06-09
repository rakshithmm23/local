import React, { Component } from 'react';
import Button from '../common/Button';
import CustomModal from '../common/CustomModal';
import { Modal,Media } from 'react-bootstrap';

class BookServiceBox extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }
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
                                    <span>
                                        <h4>model</h4>
                                        <span>{this.props.model}</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </figure>
                    <figcaption className="myCar-card-caption">
                        <h4>{this.props.place}</h4>
                        <h5>{this.props.name}</h5>
                        <Button btnSize="sm" fontSize={14} label="Book Service" btnCallBack={() => this.setState({ showModal: true })} />
                    </figcaption>
                    <CustomModal showModal={this.state.showModal}>
                        <Modal.Body>
                            <Media>
                                <Media.Left>
                                    <img width={69} height={69} src="../../images/book-service-1.png" alt="Image" />
                                </Media.Left>
                                <Media.Body>
                                    <h5>Car Wash</h5>
                                </Media.Body>
                            </Media>
                        </Modal.Body>

                    </CustomModal>
                </div>

            </div>
        );
    }
}

export default BookServiceBox;