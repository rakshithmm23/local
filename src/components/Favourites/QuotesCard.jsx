import React, { Component } from 'react';
import IconNotification from '../common/IconNotification';
import Button from '../common/Button';
import { Media } from 'react-bootstrap';

class QuotesCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavouriteVisible: true,
        };
    }
    render() {
        const { index, vendorName, rating, distance, reviews, quoteKey } = this.props;
        return (
            <div>
                 <div className={this.props.activeClass == "active" ? "jobcard box active" : "jobcard box"} onClick={this.props.ClickedQuoteCard} ref={index}>
                    <div className="box-content">
                        <Media>
                            <Media.Left>
                                <img src="../../images/car.jpg" alt="Image" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading>{index} {vendorName}
                                    <span className="mdi mdi-heart" onClick={(e) => this.props.removeFavourite(e, quoteKey)} />
                                </Media.Heading>
                                <div className="rating rating-left">
                                    <span className={this.state.starSelected ? "mdi mdi-star" : "mdi mdi-star-outline"} />
                                    <span className={this.state.starSelected ? "mdi mdi-star" : "mdi mdi-star-outline"} />
                                    <span className={this.state.starSelected ? "mdi mdi-star" : "mdi mdi-star-outline"} />
                                    <span className="mdi mdi-star-outline" />
                                    <span className="mdi mdi-star-outline" />
                                    <span className="rating-text">{rating} ({reviews} reviews)</span></div>
                                <span className="distance">{distance} Km</span>
                            </Media.Body>
                        </Media>
                        <div className="box-footer search-result-card">
                            <div className="footer-container">
                                <span className="card-ph-number">+971 919 233 470</span>
                                <Button btnType="" btnSize="sm" fontSize={13} label="View Quote" btnCallBack={this.props.viewPayment} />
                                {/*<span className="quotes-cost">120 AED</span>
                                <div className="box-message">
                                    <IconNotification iconType="comment-processing-outline" iconLabel="Messages" notifyClass="notification" viewMessaging={this.props.viewMessaging}/>
                                </div>*/}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuotesCard;
