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
    changeStar(){
            console.log('dasds')
        }
    render() {
        
        return (
            <div className="jobcard box">
                <div className="box-content">
                    <Media>
                        <Media.Left>
                            <img src="../../images/car.jpg" alt="Image" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>1. Shine Works <span className={this.state.isFavouriteVisible?"mdi mdi-heart":"mdi mdi-heart-outline"} onClick={(e) => {e.preventDefault(); this.setState({'isFavouriteVisible': !this.state.isFavouriteVisible});}}/></Media.Heading>
                            <div className="rating">
                                <span className="mdi mdi-star" onMouseOver={()=>{this.changeStar()}}/>
                                <span className="mdi mdi-star"/>
                                <span className="mdi mdi-star"/>
                                <span className="mdi mdi-star-outline"/>
                                <span className="mdi mdi-star-outline"/>
                                <span>3.2 (23 Reviews)</span></div>
                            <span className="distance">2.5km</span>
                        </Media.Body>
                    </Media>
                    <div className="box-footer">
                        <div className="footer-container">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="View Quote" />
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