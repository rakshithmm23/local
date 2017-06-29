import React, { Component } from 'react';

class CardType extends Component {
    constructor() {
        super()
        this.state = {
            showTimeLine: false
        }
    }
    getIcons(jobType, val) {
        if (val == "waiting") {
            return (<div className="job-icon  notification">
                <span className="mdi mdi-pencil"></span>
                <span className="commentLabel">Edit</span>
            </div>)
        } else if (val == "active") {
            return (
                <div>
                    <div className="job-icon  notification"><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
                    <div className="job-icon  notification"><span className="mdi mdi-file-outline"></span><span className="notifyTag"></span><span className="commentLabel">Quotes</span></div>
                </div>
            )
        } else if (val == "accepted" || val == "inProgress") {
            return (
                <div className="job-icon  notification"><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
            )
        } else if (val == "finished") {
            return (
                <div className="job-icon  notification"><span className="mdi mdi-star-outline"></span><span className="commentLabel">Review</span></div>
            )
        } else if (val == "cancelled") {
            return (

                <div className="job-icon  notification"><span className="mdi mdi-help"></span><span className="commentLabel">Help</span></div>
            )
        } else if (val == "expired") {
            return (
                <div >
                    <div className="job-icon  notification"><span className="mdi mdi-help"></span><span className="commentLabel">Help</span></div>
                    <div className="job-icon  notification"><span className="mdi mdi-refresh"></span><span className="commentLabel">Rebook</span></div>
                </div>
            )
        }
    }
    render() {

        const { cardDetails,jobLeftGridValue,jobRightGridValue } = this.props;
        return (
            <div className={"job-updates " + cardDetails.statusIndicator}>
                <div className="row">
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
                                                <li>
                                                    {cardDetails.statusPopup && <li>
                                                        <li onClick={() => this.setState({ showTimeLine: !this.state.showTimeLine })}>
                                                            {this.state.showTimeLine ?<button className="btn btn-theme sm label" >
                                                                <i className="mdi mdi-chevron-down" />
                                                                Collapse Timeline
                                                            </button>:
                                                            <button className="btn btn-theme sm label" >
                                                                <i className="mdi mdi-chevron-up" />
                                                                Expand Timeline
                                                            </button>
                                                            }
                                                        </li>
                                                    </li>}
                                                </li>
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
                        </div>
                    </div>
                </div>
                {/*///////*/}
                 {cardDetails.statusPopup && this.state.showTimeLine && <div className="job-footer active">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 pad0">
                            <div className="collapse in">
                                <h1 className="job-footer-title">Job Progress</h1>
                                <div className="status-popup "><span className="statusPopup-arrow"></span>
                                    <div className="iconHolder"><span className="statusIcon"></span></div>
                                    <div className="statusDescription">
                                        <h4>Door Locking Mechanisms and Windows</h4><span>09 Mar 15 11:00 AM</span><span className="status-process">On going</span><a href="" className="view-worklog pull-right">View Worklog</a></div>
                                </div>
                                <div>
                                    <div className="row bs-wizard">
                                        <div className="bs-wizard-step complete">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step complete">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step complete">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step complete">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step active">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step disabled">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step disabled">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step disabled">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step disabled">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step disabled">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step disabled">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                        <div className="bs-wizard-step disabled">
                                            <div className="text-center bs-wizard-stepnum">Step 1</div>
                                            <div className="progress">
                                                <div className="progress-bar"></div>
                                            </div>
                                            <a href="#" className="bs-wizard-dot"></a>
                                        </div>
                                    </div>
                                </div><span className="job-start-point">Job started</span><span className="job-end-point">Car ready</span></div>
                        </div>
                    </div>
                </div>}

            </div>




        );
    }
}



export default CardType;