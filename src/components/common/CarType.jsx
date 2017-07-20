import React, { Component } from 'react';
import { map } from 'lodash';
import StatusBar from '../common/StatusBar';
import CustomModal from '../common/CustomModal';
import { DropdownButton, MenuItem, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Rating from 'react-rating';

class CardType extends Component {
    constructor() {
        super();
        this.state = {
            showTimeLine: false,
            saveModal: false,
            max_chars: 200,
            chars_left: 0,
        };
    }
    
    getIcons(jobType, val) {
        if (val == "waiting") {
            return (<div className="job-icon  notification">
                <span className="mdi mdi-pencil"></span>
                <span className="commentLabel">Edit</span>
            </div>);
        } else if (val == "active") {
            return (
                <div>
                    <div className="job-icon  notification" onClick={this.props.messageClick}><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
                    <div className="job-icon  notification"><span className="mdi mdi-file-outline"></span><span className="notifyTag"></span><span className="commentLabel">Quotes</span></div>
                </div>
            );
        } else if (val == "accepted" || val == "inProgress") {
            return (
                <div className="job-icon  notification" onClick={this.props.messageClick}><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
            );
        } else if (val == "finished") {
            return (
                <div className="job-icon  notification" onClick={() => this.setState({ saveModal: true })}>
                    <span className="mdi mdi-star-outline"></span>
                    <span className="commentLabel">Review</span>
                </div>
            );
        } else if (val == "cancelled") {
            return (
                <div className="job-icon  notification"><span className="mdi mdi-help"></span><span className="commentLabel">Help</span></div>
            );
        } else if (val == "expired") {
            return (
                <div >
                    <div className="job-icon  notification"><span className="mdi mdi-help"></span><span className="commentLabel">Help</span></div>
                    <div className="job-icon  notification"><span className="mdi mdi-refresh"></span><span className="commentLabel">Rebook</span></div>
                </div>
            );
        }
    }
    stepClick(e,key) {
        if (e.clientX > 690) {
            this.setState({ statusPopupPosition: e.clientX - 650, statusPopupArrow: 84 + '%',activeButton:key })
        } else if (e.clientX < 350) {
            this.setState({ statusPopupPosition: e.clientX - 317, statusPopupArrow: 6 + '%',activeButton:key })
        }
        else {
            this.setState({ statusPopupPosition: e.clientX - 360, statusPopupArrow: 16 + '%',activeButton:key })
        }
    }
    handleChange(event) {
        // let input = null
        // input = event
        const val = event.target.value;
        this.setState({
            chars_left: this.state.max_chars - val.length
        });
    }
    showTimeline(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState({ showTimeLine: !this.state.showTimeLine })
    }


    render() {
        const { cardDetails, jobLeftGridValue, jobRightGridValue,messageRoute } = this.props;
        return (
            <div className={"job-updates " + cardDetails.statusIndicator} >
                <div className="row" onClick={messageRoute}>
                    <div className="col-md-12 col-sm-12 col-xs-12 pad0">
                        <div className={jobLeftGridValue + " col-sm-12 col-xs-12 pad0"}>
                            <div className="job-left">
                                <div className="job-card">
                                    <div className="card-img"><img src="../../images/car.jpg" alt="Ayaz's Buick" /></div>
                                    <div className="card-info">
                                        <div className="job-name">{cardDetails.customerName}</div>
                                        <div className="job-title">{cardDetails.serviceTypes}</div>
                                        <div className="job-details">
                                            <ul>
                                                <li>
                                                    <label>Order ID :</label><span>{cardDetails.customeId}</span></li>
                                                <li>
                                                    <label>Start :</label><span>{cardDetails.startDate}</span></li>
                                                {cardDetails.statusPopup &&
                                                    <li className="desktop-expand-timeline" onClick={(e) => {this.showTimeline(e)}}>
                                                        {this.state.showTimeLine ? <button className="btn btn-theme sm label" >
                                                            <i className="mdi mdi-chevron-down" />
                                                            Collapse Timeline
                                                        </button> :
                                                            <button className="btn btn-theme sm label">
                                                                <i className="mdi mdi-chevron-up" />
                                                                Expand Timeline
                                                        </button>
                                                        }
                                                    </li>}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={jobRightGridValue + " col-sm-12 col-xs-12 pad0"}>
                            <div className="job-right">
                                <div className="job-right-header">
                                    <div className={"status-label " + cardDetails.statusIndicator} >{cardDetails.statusIndicator}</div>
                                    <div className="job-icon notification">
                                        {this.getIcons(this, cardDetails.statusIndicator)}
                                    </div>
                                </div>
                                {cardDetails.jobInfoMessage && <div className="jr-body">
                                    <div className="jobInfo ">
                                        <p>{cardDetails.jobInfoMessage}</p>
                                    </div>
                                </div>}
                                {cardDetails.vendorDetails && <div className="vendor-quote">
                                    <ul>
                                        <li>
                                            <label>Vendor</label>
                                            <span>{cardDetails.vendorDetails ? cardDetails.vendorDetails.vendor : ""}</span>
                                            <span className="vendor-place">{cardDetails.vendorDetails ? cardDetails.vendorDetails.vendorPlace : ""}</span>
                                            <span className="vendor-mobile">{cardDetails.vendorDetails ? cardDetails.vendorDetails.vendorMobile : ""}</span>
                                        </li>
                                        <li>
                                            <label>Quote</label>
                                            <span>{cardDetails.vendorDetails ? cardDetails.vendorDetails.quote : ""}</span>
                                        </li>
                                    </ul>
                                </div>}
                            </div>
                            {cardDetails.statusPopup &&
                                <div className="mobile-expand-timeline">
                                    <div onClick={(e) => this.showTimeline(e)}>
                                        {this.state.showTimeLine ? <button className="btn btn-theme sm label" >
                                            <i className="mdi mdi-chevron-down" />
                                            Collapse Timeline
                                                            </button> :
                                            <button className="btn btn-theme sm label" >
                                                <i className="mdi mdi-chevron-up" />
                                                Expand Timeline
                                            </button>
                                        }
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
                {/*///////*/}
                {cardDetails.statusPopup && this.state.showTimeLine && <div className="job-footer active">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 pad0">
                            <div className="collapse in">
                                <h1 className="job-footer-title">Job Progress</h1>
                                <StatusBar statusCount={cardDetails.totalTask} />
                                <span className="job-start-point">Job started</span><span className="job-end-point">Car ready</span></div>
                        </div>
                    </div>
                </div>}

                <CustomModal footer="true" showModal={this.state.saveModal} className="rating-modal" closeIcon="true" saveText="Submit">
                    <Modal.Body>
                        <div className="image-holder">
                            <img src="../../images/test.jpg" alt="" />
                            <h4>Jaidah Automotive</h4>
                            <span className="sub-text">Basic Car Wash</span>
                            <span className="sub-text">120 AED</span>
                        </div>
                        <div className="stars">
                            <Rating
                                empty="mdi mdi-star-outline "
                                full="mdi mdi-star active-star"
                                fractions={2}

                            />
                        </div>
                        <div className="comments">
                            {/*<TextInput
                                            type="text"
                                            label="Comments"
                                            name="Comments"
                                            onChange={this.handleChange.bind(this)}
                                        />*/}
                            <FormGroup>
                                <FormControl
                                    className="textAlign"
                                    componentClass="textarea"
                                    placeholder="Comments"
                                    onChange={this.handleChange.bind(this)} />
                            </FormGroup>
                            <span className="text-limit">{this.state.chars_left}/200</span>
                        </div>
                    </Modal.Body>
                </CustomModal>
            </div>
        );
    }
}



export default CardType;
