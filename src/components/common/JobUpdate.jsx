import React, { Component } from 'react';
import { map } from 'lodash';
import IconNotification from '../common/IconNotification';
import Badge from '../common/Badge';
import Status from '../common/Status';
import Button from '../common/Button';
import { Collapse } from 'react-bootstrap';
import EmptyUpdates from './EmptyUpdates';
import CarType from './CarType'

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
  collapseCard(){
    
  }
  render() {
    debugger
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
        customerName: 'Bala Subramani1',
        serviceTypes: 'Emergency Service',
        customeId: '12345678',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'waiting',
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
        customerName: 'Bala Subramani2',
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
        vendorDetails: 
          {
            vendor: 'Buddy’s Car Service',
            vendorPlace: '3916 Address Tower, Street Name, Dubai',
            vendorMobile: '+971 919 233 470',
            quote: '200 AED',
            totalTask: '8 Tasks',
          }
        ,
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
        vendorDetails: 
          {
            vendor: 'Buddy’s Car Service',
            vendorPlace: '3916 Address Tower, Street Name, Dubai',
            vendorMobile: '+971 919 233 470',
            quote: '200 AED',
            totalTask: '8 Tasks',
          }
        ,
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
        vendorDetails: 
          {
            vendor: 'Buddy’s Car Service',
            vendorPlace: '3916 Address Tower, Street Name, Dubai, 3916 Address Tower, Street Name, Dubai',
            vendorMobile: '+971 919 233 470',
            quote: '200 AED',
            totalTask: '8 Tasks',
          }
        ,
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

    return (
      <div>
        <h4 className="job-update-title">Job Updates</h4>
        <EmptyUpdates />
        {/*{jobDataList}*/}
        {map(jobData, (val, key) => {
          return (
            <div className={"job-updates " + val.statusIndicator}>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 pad0">
                  <div className="col-md-5 col-sm-12 col-xs-12 pad0">
                    <div className="job-left">
                      <div className="job-card">
                        <div className="card-img"><img src="../../images/car.jpg" alt="Ayaz's Buick" /></div>
                        <div className="card-info">
                          <div className="job-name">{val.customerName}</div>
                          <div className="job-title">{val.serviceTypes}</div>
                          <div className="job-details">
                            <ul>
                              <li>
                                <label>Order ID :</label><span>{val.customeId}</span></li>
                              <li>
                                <label>Start :</label><span>{val.startDate}</span></li>
                              <li>
                                {val.statusPopup && <li>
                                    <li>
                                      <button className="btn btn-theme sm label" onClick={this.collapseCard.bind(this)}>
                                        <i className="mdi mdi-chevron-up"></i>
                                          Collapse Timeline
                                      </button>
                                    </li>
                                  </li>}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12 pad0">
                    <CarType type={val.statusIndicator} notes={val.jobInfoMessage} vendorName={val.vendorDetails?val.vendorDetails.vendor:""}
                          address={val.vendorDetails?val.vendorDetails.vendorPlace:""} phoneNumber={val.vendorDetails?val.vendorDetails.vendorMobile:""}
                          price={val.vendorDetails?val.vendorDetails.quote:""}/>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}
