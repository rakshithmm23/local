import React, { Component } from 'react';
import { map } from 'lodash';
import Badge from '../common/Badge';
import Status from '../common/Status';
import Button from '../common/Button';
import { Collapse } from 'react-bootstrap';
import { Media } from 'react-bootstrap';
import IconNotification from '../common/IconNotification';

export default class RequestCard extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false,
      currentWidth: ''
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.windowWidth = this.windowWidth.bind(this);
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    const windowWidth = this.windowWidth();
    this.setState({ 'currentWidth': windowWidth });
  }
  windowWidth() {
    let docElemProp = window.document.documentElement.clientWidth,
      body = window.document.body;
    return window.document.compatMode === "CSS1Compat" && docElemProp || body && body.clientWidth || docElemProp;
  }
  render() {
    // console.log(this.state.currentWidth)
    const { infoStatus, statusType, statusTitle, statusTime, statusProcess } = this.props;
    let jobLeftGridValue = "";
    let jobRightGridValue = "";
    let infoClass = 'jobInfo ';
    let statusClass = 'status-popup';
    if (this.state.currentWidth <= 1155 && this.state.currentWidth >= 992) {
      jobLeftGridValue = "col-md-7";
      jobRightGridValue = "col-md-5";
    } else if (this.state.currentWidth <= 1345 && this.state.currentWidth >= 1155) {
      jobLeftGridValue = "col-md-6";
      jobRightGridValue = "col-md-6";
    } else {
      jobLeftGridValue = "col-md-5";
      jobRightGridValue = "col-md-7";
    }
    const jobData = [
      {
        carImage: '../../images/car.jpg',
        customerName: 'Bala Subramani',
        serviceTypes: 'Emergency Service',
        customeId: '12345678',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'warning',
        jobIcons: [
          {
            iconType: 'pencil',
            iconLabel: 'Edit',
          }
        ],
        jobInfoMessage: 'Your request #9596378 has been placed successfully. Our vendors are ' +
        'currently assessing your application and will get back with their quotes soon.',
      },

    ];
    const jobDataList = map(jobData, (item, key) => {
      const jobSubList = map(item.statusPopup, (subItem, subKey) => {
        return (
          <div className={statusClass + ' ' + (statusType ? statusType : '')} key={subKey}>
            <span className="statusPopup-arrow" />
            <div className="iconHolder">
              <span className={subItem.imgClassName} />
            </div>
            <div className="statusDescription">
              <h4>{subItem.statusDescription}</h4>
              <span>{subItem.statusTime}</span>
              <span className="status-process">{subItem.statusMessage}</span>
              <a href="" className="view-worklog pull-right">View Worklog</a>
            </div>
          </div>
        );
      });
      const vendorDetailsView = item.vendorDetails ? item.vendorDetails.map((item, key) => {
        return (
          <div key={key}>
            <li>
              <label>
                Vendor
              </label>
              <span>
                {item.vendor}
              </span>
              <span className="vendor-place">
                {item.vendorPlace}
              </span>
              <span className="vendor-mobile">
                {item.vendorMobile}
              </span>
            </li>
            <li>
              <label>
                Quote
              </label>
              <span>
                {item.quote}
              </span>
            </li>
          </div>
        );
      }) : '';
      return (
        <div key={key}>
          {key + 1 == 1 && <h4 className="job-update-title">Job Updates</h4>}
          <div className={"job-updates " + item.statusIndicator}>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 pad0">
                <div className={jobLeftGridValue + " col-sm-12 col-xs-12 pad0"}>
                  <div className="job-left">
                    <div className="job-card">
                      <div className="card-img">
                        <img src={item.carImage} alt="Ayaz's Buick" />
                      </div>
                      <div className="card-info">
                        <div className="job-name">{item.customerName}</div>
                        <div className="job-title">{item.serviceTypes}</div>
                        <div className="job-details">
                          <ul>
                            <li>
                              <label>Order ID :</label>
                              <span>{item.customeId}</span>
                            </li>
                            <li>
                              <label>Start :</label>
                              <span>{item.startDate}</span>
                            </li>
                            <li>
                              {item.statusStep && item.statusPopup && item.statusPopup.length > 0 && <Button iconName={this.state.open ? 'chevron-up' : 'chevron-down'} btnCallBack={() => this.setState({ open: !this.state.open })}
                                btnType="label"
                                btnSize="sm"
                                fontSize={11}
                                label={this.state.open ? 'Collapse Timeline' : 'Expand Timeline'}
                              />}
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
                      <Badge badgeType={item.statusIndicator} fontSize={14}>
                        {item.statusIndicator}
                      </Badge>
                      {item.jobIcons && item.jobIcons.length > 0 && item.jobIcons.map((jobIcon, key) => {
                        return (<IconNotification
                          key={key}
                          iconType={jobIcon.iconType}
                          iconLabel={jobIcon.iconLabel}
                          notifyClass="notification" />);
                      })}
                    </div>
                    <div className="vendor-quote">
                      {item.vendorDetails && item.vendorDetails.length > 0 && <ul className="list-unstyled">
                        {vendorDetailsView}
                      </ul>}
                    </div>
                    <div>
                      {!(item.vendorDetails && item.vendorDetails.length > 0) && item.jobInfoMessage && <div className="jr-body">
                        <div className={infoClass}>
                          <p>
                            {item.jobInfoMessage}
                          </p>
                        </div>
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 pad0">
                {/*
                |--------------------------------------------------
                | job summary
                |--------------------------------------------------
                */}
                <div className="request-summary clearfix">
                  <div className="col-md-6 clearfix left">
                    <div className="request-summary-tab clearfix">
                      <div className="col-md-6 clearfix">
                        <div className="title active">
                          <span>Job Details</span>
                        </div>
                      </div>
                      <div className="col-md-6 clearfix">
                        <div className="title">
                          <span>Quotes</span>
                        </div>
                      </div>
                    </div>
                    <div className="quotes-section">
                      <div className="title">
                        <span>4 Quotes Received</span>
                      </div>
                      <div className="wrapper">
                        {/*css in JobUpdateCard.css*/}
                        <div className="jobcard box">
                          <div className="box-content">
                            <Media>
                              <Media.Left>
                                <img width={100} height={70} src="../../images/car.jpg" alt="Image" />
                              </Media.Left>
                              <Media.Body>
                                <Media.Heading>1. Shine Works</Media.Heading>
                                <div className="rating"><span>3.2 (23 Reviews)</span></div>
                                <span className="distance">2.5km</span>
                              </Media.Body>
                            </Media>
                            <div className="box-footer">
                              <div className="footer-container">
                                <div className="input-group">
                                <span className="input-group-btn">
                                  <button className="btn btn-success" type="button">View Quote</button>
                                </span>
                              </div>
                              <span className="id-number">120EAD</span>
                              <div className="box-message">
                                <IconNotification iconType="comment-processing-outline" iconLabel="Messages" notifyClass="notification"/>
                              </div>
                              </div>
                              
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      );
    });
    return (
      <div>
        {jobDataList}
      </div>
    );
  }
}
