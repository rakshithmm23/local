import React, { Component } from 'react';

class CardType extends Component {
    render() {
        debugger
        const { notes, type,vendorName,address,phoneNumber,price } = this.props;
        const style = "fontSize: 14px";
        return (

            <div>
                {type == 'waiting' && <div className="job-right">
                    <div className="job-right-header">
                        <div className="status-label waiting">waiting</div>
                        <div className="job-icon  notification">
                            <span className="mdi mdi-pencil"></span>
                            <span className="commentLabel">Edit</span>
                        </div>
                    </div>
                    <div>
                        <div className="jr-body">
                            <div className="jobInfo ">
                                <p>{notes}</p>
                            </div>
                        </div>
                    </div>
                </div>}

                {type == 'active' && <div className="job-right">
                    <div className="job-right-header">
                        <div className="status-label active" >active</div>
                        <div className="job-icon  notification">
                            <span className="mdi mdi-comment-processing-outline"></span>
                            <span className="notifyTag"></span>
                            <span className="commentLabel">Messages</span>
                        </div>
                        <div className="job-icon  notification">
                            <span className="mdi mdi-file-outline"></span>
                            <span className="notifyTag"></span>
                            <span className="commentLabel">Quotes</span>
                        </div>
                    </div>
                    <div>
                        <div className="jr-body">
                            <div className="jobInfo ">
                                <p>{notes}</p>
                            </div>
                        </div>
                    </div>
                </div>}

                {type == 'inProgress' && <div className="job-right">
                    <div className="job-right-header">
                        <div className="status-label inProgress" > inProgress</div>
                        <div className="job-icon  notification"><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
                    </div>
                    <div>
                        <div className="vendor-quote">
                            <ul>
                                <li>
                                    <label>Vendor</label>
                                    <span>{vendorName}</span>
                                    <span className="vendor-place">{address}</span>
                                    <span className="vendor-mobile">{phoneNumber}</span>
                                </li>
                                <li>
                                    <label>Quote</label>
                                    <span>{price}</span>
                                </li>
                                {/*<li><button className="btn btn-theme sm label" ><i className="mdi mdi-chevron-down"></i></button></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>}

                {type == 'accepted' && <div className="job-right">
                    <div className="job-right-header">
                        <div className="status-label inProgress" style={style.fontSize}> accepted</div>
                        <div className="job-icon  notification"><span className="mdi mdi-comment-processing-outline"></span><span className="notifyTag"></span><span className="commentLabel">Messages</span></div>
                    </div>
                    <div>
                        <div className="vendor-quote">
                            <ul>
                                <li>
                                    <label>Vendor</label>
                                    <span>{vendorName}</span>
                                    <span className="vendor-place">{address}</span>
                                    <span className="vendor-mobile">{phoneNumber}</span>
                                </li>
                                <li>
                                    <label>Quote</label>
                                    <span>{price}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>}

                {type == 'finished' && <div className="job-right">
                    <div className="job-right-header">
                        <div className="status-label finished">finished</div>
                        <div className="job-icon  notification"><span className="mdi mdi-star-outline"></span><span className="commentLabel">Review</span></div>
                    </div>
                    <div>
                        <div className="vendor-quote">
                            <ul>
                                <li>
                                    <label>Vendor</label>
                                    <span>{vendorName}</span>
                                    <span className="vendor-place">{address}</span>
                                    <span className="vendor-mobile">{phoneNumber}</span>
                                </li>
                                <li>
                                    <label>Quote</label>
                                    <span>{price}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>}

                {type == 'cancelled' && <div className="job-right">
                    <div className="job-right-header">
                        <div className="status-label cancelled" >cancelled</div>
                        <div className="job-icon  notification"><span className="mdi mdi-help"></span><span className="commentLabel">Help</span></div>
                    </div>
                    <div>
                        <div className="jr-body">
                            <div className="jobInfo ">
                                <p>{notes}</p>
                            </div>
                        </div>
                    </div>
                </div>}

                 {type == 'expired' && <div className="job-right">
                    <div className="job-right-header">
                        <div className="status-label expired" >expired</div>
                        <div className="job-icon  notification"><span className="mdi mdi-help"></span><span className="commentLabel">Help</span></div>
                        <div className="job-icon  notification"><span className="mdi mdi-refresh"></span><span className="commentLabel">Rebook</span></div>
                    </div>
                    <div>
                        <div className="jr-body">
                            <div className="jobInfo ">
                                <p>{notes}</p>
                            </div>
                        </div>
                    </div>
                </div>}

            </div>
            


        );
}
}



export default CardType;