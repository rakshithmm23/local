import React, { Component } from 'react';
import { map } from 'lodash';
<<<<<<< HEAD

class CardType extends Component {
    constructor() {
        super()

        this.state = {
            statusPopupPosition: -40000,
            statusPopupArrow: -4000,
=======
import StatusBar from '../common/StatusBar';

class CardType extends Component {
    constructor() {
        super();
        this.state = {
>>>>>>> 6773e9c75065d3668aa4bfa6e6a15355f4ee0f28
            showTimeLine: false
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
                    <div className="job-icon  notification"><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
                    <div className="job-icon  notification"><span className="mdi mdi-file-outline"></span><span className="notifyTag"></span><span className="commentLabel">Quotes</span></div>
                </div>
            );
        } else if (val == "accepted" || val == "inProgress") {
            return (
                <div className="job-icon  notification"><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
            );
        } else if (val == "finished") {
            return (
                <div className="job-icon  notification"><span className="mdi mdi-star-outline"></span><span className="commentLabel">Review</span></div>
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
    stepClick(e, key, len) {
        // if(key+1 == len){
        //      this.setState({statusPopupPosition:e.clientX-360,statusPopupArrow:35+'%'})
        // }else if(key == 0){
        //     this.setState({statusPopupPosition:-5,statusPopupArrow:35+'%'})
        // }
        // else{
        if (e.clientX > 1000) {
            this.setState({ statusPopupPosition: e.clientX - 550, statusPopupArrow: 80 + '%' })
        } else if (e.clientX < 300) {
            this.setState({ statusPopupPosition: e.clientX - 260, statusPopupArrow: 11 + '%' })
        }
        else {
            this.setState({ statusPopupPosition: e.clientX - 360, statusPopupArrow: 35 + '%' })
        }

    }



    render() {
        const style = {
            popupPos: {
                left: this.state.statusPopupPosition
            }, popupArrow: {
                left: this.state.statusPopupArrow
            }
        }
        const { cardDetails, jobLeftGridValue, jobRightGridValue } = this.props;
        const stepCount = map(cardDetails.statusPopup, (stepVal, key) => {
            return (
                <div className={cardDetails.statusPopup.length == key + 1 ? "bs-wizard-step active" : "bs-wizard-step complete"} key={key} >
                    <div className="text-center bs-wizard-stepnum">Step 1</div>
                    <div className="progress">
                        <div className="progress-bar"></div>
                    </div>
                    <a className="bs-wizard-dot" onClick={(e) => { this.stepClick(e, key, cardDetails.statusPopup.length) }}></a>
                </div>
            )
        })
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
                                                {cardDetails.statusPopup &&
                                                    <li className="desktop-expand-timeline" onClick={() => this.setState({ showTimeLine: !this.state.showTimeLine })}>
                                                        {this.state.showTimeLine ? <button className="btn btn-theme sm label" >
                                                            <i className="mdi mdi-chevron-down" />
                                                            Collapse Timeline
                                                        </button> :
                                                            <button className="btn btn-theme sm label" >
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
                                    <div onClick={() => this.setState({ showTimeLine: !this.state.showTimeLine })}>
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
<<<<<<< HEAD
                    </div>
                    {/*///////*/}
                    {cardDetails.statusPopup && this.state.showTimeLine && <div className="job-footer active">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12 pad0">
                                <div className="collapse in">
                                    <h1 className="job-footer-title">Job Progress</h1>
                                    <div className="status-popup " style={style.popupPos}><span className="statusPopup-arrow" style={style.popupArrow}></span>
                                        <div className="iconHolder"><span className="statusIcon"></span></div>
                                        <div className="statusDescription">
                                            <h4>Door Locking Mechanisms and Windows</h4><span>09 Mar 15 11:00 AM</span><span className="status-process">On going</span><a href="" className="view-worklog pull-right">View Worklog</a></div>
                                    </div>
                                    <div>
                                        <div className="row bs-wizard">
                                            {stepCount}
                                        </div>
                                    </div><span className="job-start-point">Job started</span><span className="job-end-point">Car ready</span></div>
                            </div>
                        </div>
                    </div>}
                </div>
                );
=======
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
            </div>
        );
>>>>>>> 6773e9c75065d3668aa4bfa6e6a15355f4ee0f28
    }
}



export default CardType;