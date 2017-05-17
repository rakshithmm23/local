import React, { Component } from 'react';
import { map } from 'lodash';
import Badge from '../common/Badge';
import Status from '../common/Status';
import Button from '../common/Button';
import { Collapse } from 'react-bootstrap';
import QuotesCard from './QuotesCard';
import IconNotification from '../common/IconNotification';

export default class RequestCard extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false,
      jobUpdates:"quotes",
      currentWidth: '',
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.windowWidth = this.windowWidth.bind(this);
  }
  jobDetail(val){
    this.setState({jobUpdates:val});
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
                        <div className={this.state.jobUpdates=="details"?"title active":"title"} onClick={()=>{this.jobDetail('details')}}>
                          <span>Job Details</span>
                        </div>

                      </div>
                      <div className="col-md-6 clearfix">
                        <div className={this.state.jobUpdates=="quotes"?"title active":"title"} onClick={()=>{this.jobDetail('quotes')}}>
                          <span>Quotes</span>
                        </div>
                      </div>
                    </div>
                    <div className="quotes-section">
                      <div className="title">
                        <span>4 Quotes Received</span>
                        <div className="filterSection">
                          <select>
                            <option value="volvo">Filter</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                          <select>
                            <option value="volvo">Sort By</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                        </div>
                      </div>
                      <div className="wrapper">
                        {/*<div className="jobcard box">
                          <div className="box-content">
                            <Media>
                              <Media.Left>
                                <img  src="../../images/car.jpg" alt="Image" />
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
                                  <IconNotification iconType="comment-processing-outline" iconLabel="Messages" notifyClass="notification" />
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>*/}
                        {this.state.jobUpdates == "quotes" &&
                        <div>
                          <QuotesCard />
                          <QuotesCard />
                          <QuotesCard />
                          <QuotesCard />
                        </div>
                        }
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
