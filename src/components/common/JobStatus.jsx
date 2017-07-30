import React, { Component } from 'react';
import CustomModal from '../common/CustomModal';
import { Modal, Media } from 'react-bootstrap';

class JobStatus extends Component {
    constructor(){
        super()
        this.state={
            saveModal:false
        }
    }
    openModal(){
    }
    render() {
        return (
            <div>
                {this.props.status=="waiting" ? <div className="col-md-7 col-sm-12 col-xs-12 pad0">
                    <div className="job-right">
                        <div className="job-right-header">
                            <div className="status-label waiting" style="font-size: 14px;">waiting</div>
                            <div className="job-icon  notification"><span className="mdi mdi-pencil"></span><span className="commentLabel">Edit</span></div>
                        </div>
                        <div>
                            <div className="jr-body">
                                <div className="jobInfo ">
                                    <p>Your request #9596378 has been placed successfully. Our vendors are currently assessing your application and will get back with their quotes soon.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""}
                {this.props.status=="active" ? <div className="col-md-7 col-sm-12 col-xs-12 pad0">
                    <div className="job-right">
                        <div className="job-right-header">
                            <div className="status-label active" style="font-size: 14px;">active</div>
                            <div className="job-icon  notification"><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
                            <div className="job-icon  notification"><span className="mdi mdi-file-outline"></span><span className="notifyTag"></span><span className="commentLabel">Quotes</span></div>
                        </div>
                        <div>
                            <div className="jr-body">
                                <div className="jobInfo ">
                                    <p>You have received 2 new quotes and 3 new messages.Start a chat with the vendors to define the scope of work and negotiate the quotation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""}
                {this.props.status=="accepted" ? <div className="col-md-7 col-sm-12 col-xs-12 pad0">
                    <div className="job-right">
                        <div className="job-right-header">
                            <div className="status-label accepted" style="font-size: 14px;">accepted</div>
                            <div className="job-icon  notification"><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
                        </div>
                        <div>
                            <div className="vendor-quote">
                                <ul>
                                    <li>
                                        <label>Vendor</label><span>Buddy’s Car Service</span><span className="vendor-place">3916 Address Tower, Street Name, Dubai</span><span className="vendor-mobile">+971 919 233 470</span></li>
                                    <li>
                                        <label>Quote</label><span>200 AED</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> : ""}
                {this.props.status=="inProgress" ? <div className="col-md-7 col-sm-12 col-xs-12 pad0">
                    <div className="job-right">
                        <div className="job-right-header">
                            <div className="status-label inProgress" style="font-size: 14px;">inProgress</div>
                            <div className="job-icon  notification"><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
                        </div>
                        <div>
                            <div className="vendor-quote">
                                <ul>
                                    <li>
                                        <label>Vendor</label><span>Buddy’s Car Service</span><span className="vendor-place">3916 Address Tower, Street Name, Dubai</span><span className="vendor-mobile">+971 919 233 470</span></li>
                                    <li>
                                        <label>Quote</label><span>200 AED</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> : ""}
                {this.props.status=="completed" ? <div className="col-md-7 col-sm-12 col-xs-12 pad0">
                    <div className="job-right">
                        <div className="job-right-header">
                            <div className="status-label completed" style="font-size: 14px;">completed</div>
                            <div className="job-icon  notification" >
                                <span className="mdi mdi-star-outline"></span>
                                <span className="commentLabel">Review</span>
                           </div>
                        </div>
                        <div>
                            <div className="vendor-quote">
                                <ul>
                                    <li>
                                        <label>Vendor</label><span>Buddy’s Car Service</span><span className="vendor-place">3916 Address Tower, Street Name, Dubai, 3916 Address Tower, Street Name, Dubai</span><span className="vendor-mobile">+971 919 233 470</span></li>
                                    <li>
                                        <label>Quote</label><span>200 AED</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> : ""}
                {/*{this.props.status=="completed" ? <div className="col-md-7 col-sm-12 col-xs-12 pad0">
                    <div className="job-right">
                        <div className="job-right-header">
                            <div className="status-label cancelled" style="font-size: 14px;">cancelled</div>
                            <div className="job-icon  notification"><span className="mdi mdi-help"></span><span className="commentLabel">Help</span></div>
                        </div>
                        <div>
                            <div className="jr-body">
                                <div className="jobInfo ">
                                    <p>Sorry, your request was cancelled by the vendor. We apologise for the inconvenience caused.Kindly re-book the request and give us a chance to serve you to our best capacity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""}*/}
                {this.props.status=="cancelled" ? <div className="col-md-7 col-sm-12 col-xs-12 pad0">
                    <div className="job-right">
                        <div className="job-right-header">
                            <div className="status-label cancelled" style="font-size: 14px;">cancelled</div>
                            <div className="job-icon  notification"><span className="mdi mdi-help"></span><span className="commentLabel">Help</span></div>
                        </div>
                        <div>
                            <div className="jr-body">
                                <div className="jobInfo ">
                                    <p>Sorry, your request was cancelled by the vendor. We apologise for the inconvenience caused.Kindly re-book the request and give us a chance to serve you to our best capacity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""}
                {this.props.status=="expired" ? <div className="col-md-7 col-sm-12 col-xs-12 pad0">
                    <div className="job-right">
                        <div className="job-right-header">
                            <div className="status-label expired" style="font-size: 14px;">expired</div>
                            <div className="job-icon  notification"><span className="mdi mdi-help"></span><span className="commentLabel">Help</span></div>
                            <div className="job-icon  notification"><span className="mdi mdi-refresh"></span><span className="commentLabel">Rebook</span></div>
                        </div>
                        <div>
                            <div className="jr-body">
                                <div className="jobInfo ">
                                    <p>Sorry, your request was cancelled by the vendor. We apologise for the inconvenience caused.Kindly re-book the request and give us a chance to serve you to our best capacity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ""}
                <CustomModal onHide={() => {this.setState({saveModal: false})}} showModal={this.state.saveModal} footer="false" title="book a service" className="bookService-modal" closeIcon="true">
                        <Modal.Body>
                            hello
                        </Modal.Body>
                    </CustomModal>


            </div>
        );
    }
}

export default JobStatus;
