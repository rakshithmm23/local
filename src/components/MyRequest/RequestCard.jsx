import React, { Component } from 'react';
import { map, each, includes } from 'lodash';
import Badge from '../common/Badge';
import Status from '../common/Status';
import Button from '../common/Button';
import { Collapse } from 'react-bootstrap';
import QuotesCard from './QuotesCard';
import Gmaps from './Gmaps';
import IconNotification from '../common/IconNotification';
import { FormGroup, InputGroup, Addon, FormControl } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';


export default class RequestCard extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false,
      jobUpdates: "quotes",
      currentWidth: '',
      activelatitude: '',
      activelongitue: '',
      jobCardDetails: [
        {
          name: "Shine Works",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.9952672,
          longitude: 77.59058570000002,
          pinImage: '../../images/location-pin.png',
          isActive: false
        }, {
          name: "Shine Works",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.7952672,
          longitude: 77.29058570000007,
          pinImage: '../../images/location-pin.png',
          isActive: false
        }, {
          name: "Shine Works",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.4952672,
          longitude: 77.59058570000002,
          pinImage: '../../images/location-pin.png',
          isActive: false
        }, {
          name: "Shine Works",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.1952672,
          longitude: 77.89058569999997,
          pinImage: '../../images/location-pin.png',
          isActive: false
        }
      ],
      quotation: true,
      messages: false,
      mapView: true,
      quotationView: false,

    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.windowWidth = this.windowWidth.bind(this);
  }
  jobDetail(val) {
    this.setState({ jobUpdates: val });
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
  viewPayment() {
    this.setState({ mapView: false, quotationView: true, quotation: true, messages: false })
  }
  viewMessaging() {
    this.setState({ mapView: false, quotationView: true, quotation: false, messages: true })
  }
  mapClick(map) {
    let update, newDetails = [];
    this.state.jobCardDetails.map((value) => {
      if (value.latitude == map.latLng.lat() && value.longitude == map.latLng.lng()) {        
        update = {...value, pinImage: "../../images/location-pin-active.png", isActive:true};
      } else {
        update = {...value, pinImage:"../../images/location-pin.png", isActive:false};
      }
      newDetails.push(update);
    });
    this.setState({
      jobCardDetails:newDetails,
    });
  }
  closeChat() {
    this.setState({ mapView: true, quotationView: false })
  }
  viewQuotation() {
    this.setState({ quotation: !this.state.quotation, messages: !this.state.messages })
  }
  viewMessages() {
    this.setState({ quotation: !this.state.quotation, messages: !this.state.messages })
  }
  render() {
    // console.log(this.state.currentWidth)
    let jobLeftGridValue = "";
    let jobRightGridValue = "";
    let infoClass = 'jobInfo ';
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

    ];

    const jobCardLocation = map(this.state.jobCardDetails, (val, key) => {
      return { lat: val.latitude, lng: val.longitude, pinImage: val.pinImage }
    })

    const jobDataList = map(jobData, (item, key) => {
      return (
        <div key={key}>
          {key + 1 == 1 && <h4 className="job-update-title">Job Updates</h4>}
          <div className={"job-updates myRequest " + item.statusIndicator}>
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
                          notifyClassName="notification" />);
                      })}
                    </div>
                    <div>
                      {!(item.vendorDetails && item.vendorDetails.length > 0) && item.jobInfoMessage &&
                        <div className="jr-body">
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
          </div>
          <div className="requestSection">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="request-summary clearfix">
                  <div className="col-md-12 col-sm-12 col-xs-12 pad0 request-summary-header">
                    <div className="col-md-6 col-sm-12 col-xs-12 pad0">
                      <div className="request-summary-tab clearfix">
                        <div className="col-md-6 clearfix">
                          <div className={this.state.jobUpdates == "details" ? "title active" : "title"} onClick={() => { this.jobDetail('details') }}>
                            <span>Job Details</span>
                          </div>
                        </div>
                        <div className="col-md-6 clearfix">
                          <div className={this.state.jobUpdates == "quotes" ? "title active" : "title"} onClick={() => { this.jobDetail('quotes') }}>
                            <span>Quotes</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-md-6 clearfix left pad0">
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
                        {this.state.jobUpdates == "quotes" &&
                          <div>
                            {map(this.state.jobCardDetails, (val, key) => {
                              return (
                                <QuotesCard activeClass={val.isActive ? "active" : ""} vendorName={val.name} index={key} rating={val.rating} distance={val.distance} reviews={val.review}
                                  viewPayment={this.viewPayment.bind(this)} viewMessaging={this.viewMessaging.bind(this)} />
                              )
                            })}

                          </div>
                        }
                      </div>
                    </div>

                  </div>
                  <div className="col-md-6 clearfix right pad0">
                    <div className={this.state.mapView == true ? "mapSection" : "mapSection hide"}>
                      <Gmaps
                        center={{ lat: 12.9952672, lng: 77.5905857 }}
                        markers={{ jobCardLocation }}
                        markerClick={this.mapClick.bind(this)}
                        zoom={9}
                        containerElement={<div style={{ height: 100 + 'vh' }} />}
                        mapElement={<div style={{ height: 100 + 'vh' }} />}

                      />
                    </div>
                    <div className={this.state.quotationView == true ? "quotesSection" : "quotesSection hide"}>
                      <div className="quotes-right-header">
                        <div className="profile-head">
                          <span>
                            <img src="../images/pic.png" alt="" />
                          </span>
                          <label> Shine Works </label>
                        </div>
                        <div className="quotes-right-tabs">
                          <ul>
                            <li className={this.state.quotation == true ? "active" : ""} onClick={() => this.viewQuotation()}>Quote</li>
                            <li className={this.state.messages == true ? "active" : ""} onClick={() => this.viewMessages()}>Message</li>
                          </ul>
                          <a className="close-Tab" onClick={() => this.closeChat()}><i className="mdi mdi-close" /></a>
                        </div>
                      </div>
                      <div className="quotes-right-body">
                        <div className={this.state.quotation == true ? "quotes-details-Section" : "quotes-details-Section hide"}>
                          <div className="invoice-head">
                            <ul>
                              <li>
                                <label>Job Start Time:</label>
                                <span>11:30 AM on Jan 5 2017 (Rescheduled)</span>
                              </li>
                              <li>
                                <label>Quote Generated:</label>
                                <span>Jan 2, 2017</span>
                              </li>
                            </ul>
                          </div>
                          <div className="invoice-details">
                            <div className="invoice-block">
                              <h4>1. Brakes & Exhaust</h4>
                              <ul>
                                <li>
                                  <label>Brake Pads</label>
                                  <span>3 AED</span>
                                </li>
                                <li>
                                  <label>Brake Oil Change</label>
                                  <span>5 AED</span>
                                </li>
                              </ul>
                            </div>
                            <div className="invoice-block">
                              <h4>2. AC Heating & Cooling</h4>
                              <ul>
                                <li>
                                  <label>Brake Pads</label>
                                  <span>3 AED</span>
                                </li>
                                <li>
                                  <label>Brake Oil Change</label>
                                  <span>5 AED</span>
                                </li>
                              </ul>
                            </div>
                            <div className="invoice-total">
                              <label>Total</label>
                              <span>20 AED</span>
                            </div>
                          </div>
                        </div>
                        <div className={this.state.messages == true ? "quotes-message-Section" : "quotes-message-Section hide"}>
                          <div className="quotes-chat-area">
                            <div className="c-message message-in">
                              <div className="profile-head">
                                <span>
                                  <img src="../images/pic.png" alt="" />
                                </span>
                              </div>
                              <div className="c-chat">
                                <p>Lorem ipsum dolor sit amet, et tamquam docendi deleniti est</p>
                              </div>
                              <div className="delivered-details">
                                <label>2:44 PM</label>
                              </div>
                            </div>
                            <div className="c-message message-out">
                              <div className="profile-head">
                                <span>
                                  <img src="../images/pic.png" alt="" />
                                </span>
                              </div>
                              <div className="c-chat">
                                <p>Lorem ipsum dolor sit amet, et tamquam docendi deleniti est</p>
                              </div>
                              <div className="delivered-details">
                                <label>2:44 PM</label>
                              </div>
                            </div>
                          </div>
                          <div className="quotes-message-footer">
                            <FormGroup>
                              <InputGroup>
                                <FormControl type="text" placeholder="Search" />
                                <InputGroup.Addon>
                                  <i className="mdi mdi-send" />
                                </InputGroup.Addon>
                              </InputGroup>
                            </FormGroup>
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
      <div> {jobDataList} </div>
    );
  }
}
