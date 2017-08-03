import React, { Component } from 'react';
import Button from '../common/Button';
import CustomModal from '../common/CustomModal';
import { Modal, Media } from 'react-bootstrap';
import { map } from 'lodash';
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
        const formatedDate = this.props.updatedAt ? moment(this.props.updatedAt).format("DD MMM YY") : undefined;
        const bookServiceOption = [
            {
                image: "../../images/book-service-1.png",
                title: "Car Wash",
                url:"/car-wash"
            }, {
                image: "../../images/book-service-2.png",
                title: "Car Service",
                url:"/car-service"
            }, {
                image: "../../images/book-service-3.png",
                title: "Car Repair",
                url:"/car-repair"
            }
        ]
        const bookServiceOptionView = map(bookServiceOption, (service, key) => {
            return (
                <li key={key} onClick={()=>router.push(service.url)}>
                    <Media>
                        <Media.Left>
                            <img width={69} height={69} src={service.image} alt="Image" />
                        </Media.Left>
                        <Media.Body>
                            <h5>{service.title}</h5>
                            <i className="mdi mdi-chevron-right" />
                        </Media.Body>
                    </Media>
                </li>
            );
        });
        const carPhoto = this.props.images && this.props.images.length && this.props.images[0] ? this.props.images[0].original : '/images/car.jpg';
        return (
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="myCar-card " onClick={(e) => {e.preventDefault(); this.props.router.push(`/car-profiles/${this.props.id}/view`)}}>
                    <figure>
                        {carPhoto && <img src={carPhoto} alt="" />}
                        <div className="myCar-card-footer">
                            <ul>
                                <li>
                                    <h4>upcoming service</h4>
                                    {formatedDate && <span>{formatedDate}</span>}
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
                        <Button btnSize="sm" fontSize={14} label="Book Service" btnCallBack={(e) => {e.stopPropagation(); e.preventDefault(); this.setState({ showModal: true })}} />
                    </figcaption>
                    <CustomModal showModal={this.state.showModal} footer="false" title="book a service" className="bookService-modal" closeIcon="true" onHide={() => {this.setState({showModal: false})}}>
                        <Modal.Body>
                            <ul>
                                {bookServiceOptionView}
                            </ul>
                        </Modal.Body>
                    </CustomModal>
                </div>

            </div>
        );
    }
}

export default BookServiceBox;
