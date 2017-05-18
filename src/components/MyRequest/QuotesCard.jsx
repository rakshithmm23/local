import React, { Component } from 'react';
import IconNotification from '../common/IconNotification';
import Button from '../common/Button';
import { Media } from 'react-bootstrap';

class QuotesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavouriteVisible: false,
        };
    }
    render() {
        const {index, vendorName, rating, distance, reviews} = this.props;
        return (
            <div className={this.props.activeClass == "active"?"jobcard box active":"jobcard box"}>
                <div className="box-content">
                    <Media>
                        <Media.Left>
                            <img src="../../images/car.jpg" alt="Image" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{index}. {vendorName} <span className={this.state.isFavouriteVisible?"mdi mdi-heart":"mdi mdi-heart-outline"} onClick={(e) => {e.preventDefault(); this.setState({'isFavouriteVisible': !this.state.isFavouriteVisible});}}/></Media.Heading>
                            <div className="rating">
                                <span className={this.state.starSelected?"mdi mdi-star":"mdi mdi-star-outline"} />
                                <span className={this.state.starSelected?"mdi mdi-star":"mdi mdi-star-outline"} />
                                <span className={this.state.starSelected?"mdi mdi-star":"mdi mdi-star-outline"} />
                                <span className="mdi mdi-star-outline"/>
                                <span className="mdi mdi-star-outline"/>
                                <span className="rating-text">{rating} ({reviews} reviews)</span></div>
                            <span className="distance">{distance}</span>
                        </Media.Body>
                    </Media>
                    <div className="box-footer">
                        <div className="footer-container">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="View Quote" viewPayment={this.props.viewPayment} />
                            <span className="quotes-cost">120 AED</span>
                            <div className="box-message">
                                <IconNotification iconType="comment-processing-outline" iconLabel="Messages" notifyClass="notification" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default QuotesCard;