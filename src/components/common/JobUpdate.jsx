import React, { Component } from 'react';
import { map } from 'lodash';
import IconNotification from '../common/IconNotification';
import Badge from '../common/Badge';
import Status from '../common/Status';
import Button from '../common/Button';
import { Collapse } from 'react-bootstrap';

export default class JobUpdate extends Component {
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
      {
        carImage: '../../images/car.jpg',
        customerName: 'Bala Subramani',
        serviceTypes: 'Emergency Service',
        customeId: '12345678',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'active',
        jobIcons: [
          {
            iconType: 'comment-processing-outline',
            iconLabel: 'Messages',
          },
          {
            iconType: 'file-outline',
            iconLabel: 'Quotes',
          }
        ],
       jobInfoMessage: 'You have received 2 new quotes and 3 new messages.' +
       'Start a chat with the vendors to define the scope of work and negotiate the quotation.'
      },
      {
        carImage: '../../images/car.jpg',
        customerName: 'Bala Subramani',
        serviceTypes: 'Emergency Service',
        customeId: '12345678',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'accepted',
        jobIcons: [
          {
            iconType: 'comment-processing-outline',
            iconLabel: 'Messages',
          }
        ],
        vendorDetails: [
          {
            vendor: 'Buddy’s Car Service',
            vendorPlace: '3916 Address Tower, Street Name, Dubai',
             vendorMobile: '+971 919 233 470',
            quote: '200 AED',
            totalTask: '8 Tasks',
          }
        ],
        statusStep: true,
        statusPopup: [
          {
            imgClassName: 'statusIcon',
            statusDescription: 'Door Locking Mechanisms and Windows',
            statusTime: '09 Mar 15 11:00 AM',
            statusMessage: 'On going'
          }
        ],
      },
      {
        carImage: '../../images/car.jpg',
        customerName: 'Bala Subramani',
        serviceTypes: 'Emergency Service',
        customeId: '12345678',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'inProgress',
        jobIcons: [
          {
            iconType: 'comment-processing-outline',
            iconLabel: 'Messages',
          }
        ],
        vendorDetails: [
          {
            vendor: 'Buddy’s Car Service',
            vendorPlace: '3916 Address Tower, Street Name, Dubai',
             vendorMobile: '+971 919 233 470',
            quote: '200 AED',
            totalTask: '8 Tasks',
          }
        ],
        statusStep: true,
        statusPopup: [
          {
            imgClassName: 'statusIcon',
            statusDescription: 'Door Locking Mechanisms and Windows',
            statusTime: '09 Mar 15 11:00 AM',
            statusMessage: 'On going'
          }
        ]
      },
      {
        carImage: '../../images/car.jpg',
        customerName: 'Bala Subramani',
        serviceTypes: 'Emergency Service',
        customeId: '12345678',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'finished',
        jobIcons: [
          {
            iconType: 'star-outline',
            iconLabel: 'Review',
          }
        ],
        vendorDetails: [
          {
            vendor: 'Buddy’s Car Service',
            vendorPlace: '3916 Address Tower, Street Name, Dubai, 3916 Address Tower, Street Name, Dubai',
            vendorMobile: '+971 919 233 470',
            quote: '200 AED',
            totalTask: '8 Tasks',
          }
        ],
        statusStep: true,
        statusPopup: [
          {
            imgClassName: 'statusIcon',
            statusDescription: 'Door Locking Mechanisms and Windows',
            statusTime: '09 Mar 15 11:00 AM',
            statusMessage: 'On going'
          }
        ]
      },
      {
        carImage: '../../images/car.jpg',
        customerName: 'Bala Subramani',
        serviceTypes: 'Emergency Service',
        customeId: '12345678',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'cancelled',
        jobIcons: [
          {
            iconType: 'help',
            iconLabel: 'Help',
          }
        ],
        jobInfoMessage: 'Sorry, your request was cancelled by the vendor. We apologise for the inconvenience caused.' +
        'Kindly re-book the request and give us a chance to serve you to our best capacity.'
      },
      {
        carImage: '../../images/car.jpg',
        customerName: 'Bala Subramani',
        serviceTypes: 'Emergency Service',
        customeId: '12345678',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'expired',
        jobIcons: [
          {
            iconType: 'help',
            iconLabel: 'Help',
          },
          {
            iconType: 'refresh',
            iconLabel: 'Rebook',
          }
        ],
        jobInfoMessage: 'Sorry, your request was cancelled by the vendor. We apologise for the inconvenience caused.' +
        'Kindly re-book the request and give us a chance to serve you to our best capacity.',
      }
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
          {key + 1 == 1 && <h3 className="job-update-title">Job Updates</h3>}
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
                {item.statusStep && item.statusPopup && item.statusPopup.length > 0 && <div className="job-footer">
                  <Collapse in={this.state.open}>
                    <div>
                      <h1 className="job-footer-title">Job Progress</h1>
                      {jobSubList}
                      {item.statusStep && <Status taskDone={4} taskPending={8} />}
                      <span className="job-start-point">Job started</span>
                      <span className="job-end-point">Car ready</span>
                    </div>
                  </Collapse>
                </div>}
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
