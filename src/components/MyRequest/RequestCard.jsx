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
import { Scrollbars } from 'react-custom-scrollbars';
import JobDetails from './JobDetails'


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
          isActive: false
        }, {
          name: "Shine Works",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.7952672,
          longitude: 77.29058570000007,
          isActive: false
        }, {
          name: "Shine Works2",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.4952672,
          longitude: 77.59058570000002,
          isActive: false
        }, {
          name: "Shine Works3",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.4952672,
          longitude: 77.1105857,
          isActive: false
        },
        {
          name: "Shine Works4",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.4952672,
          longitude: 77.98705857000004,
          isActive: false
        },
      ],
      quotation: true,
      messages: false,
      mapView: true,
      quotationView: false,
      activeSvg: 'data:image/svg+xml,<svg%20width%3D"36px"%20height%3D"40px"%20viewBox%3D"0%200%2036%2040"%20version%3D"1.1"%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20xmlns%3Axlink%3D"http%3A//www.w3.org/1999/xlink">%0A%20%20%20%20<%21--%20Generator%3A%20Sketch%2042%20%2836781%29%20-%20http%3A//www.bohemiancoding.com/sketch%20-->%0A%20%20%20%20<title>location-pin%20copy%209</title>%0A%20%20%20%20<desc>Created%20with%20Sketch.</desc>%0A%20%20%20%20<defs>%0A%20%20%20%20%20%20%20%20<path%20d%3D"M0%2C3.99742905%20C0%2C1.78970995%201.7852456%2C0%203.99017859%2C0%20L32.0098214%2C0%20C34.2135362%2C0%2036%2C1.78197514%2036%2C3.99742905%20L36%2C25.1917601%20C36%2C27.3994792%2034.4851438%2C30.1580906%2032.6302879%2C31.3444558%20L19.0975342%2C40%20L3.48057588%2C31.1594879%20C1.5583069%2C30.071322%200%2C27.407214%200%2C25.1917601%20L0%2C3.99742905%20Z"%20id%3D"path-1"></path>%0A%20%20%20%20%20%20%20%20<mask%20id%3D"mask-2"%20maskContentUnits%3D"userSpaceOnUse"%20maskUnits%3D"objectBoundingBox"%20x%3D"0"%20y%3D"0"%20width%3D"36"%20height%3D"40"%20fill%3D"white">%0A%20%20%20%20%20%20%20%20%20%20%20%20<use%20xlink%3Ahref%3D"%23path-1"></use>%0A%20%20%20%20%20%20%20%20</mask>%0A%20%20%20%20</defs>%0A%20%20%20%20<g%20id%3D"Symbols"%20stroke%3D"none"%20stroke-width%3D"1"%20fill%3D"none"%20fill-rule%3D"evenodd"%20stroke-opacity%3D"0.455219656">%0A%20%20%20%20%20%20%20%20<g%20id%3D"location-pin-copy-9"%20stroke%3D"%23FFFFFF"%20stroke-width%3D"4"%20fill%3D"%2323AE49">%0A%20%20%20%20%20%20%20%20%20%20%20%20<use%20id%3D"Rectangle-10-Copy-3"%20mask%3D"url%28%23mask-2%29"%20xlink%3Ahref%3D"%23path-1"></use>%0A%20%20%20%20%20%20%20%20</g>%0A%20%20%20%20</g>%0A<text%20transform%3D"translate%2819%2018.5%29"%20fill%3D"%23fff"%20style%3D"font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B"%20font-size%3D"12"%20text-anchor%3D"middle">',
      svg: 'data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2236px%22%20height%3D%2240px%22%20viewBox%3D%220%200%2036%2040%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%20%20%20%20%3C%21--%20Generator%3A%20Sketch%2042%20%2836781%29%20-%20http%3A//www.bohemiancoding.com/sketch%20--%3E%0A%20%20%20%20%3Ctitle%3ERectangle%2010%20Copy%203%3C/title%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C/desc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C3.99742905%20C0%2C1.78970995%201.7852456%2C0%203.99017859%2C0%20L32.0098214%2C0%20C34.2135362%2C0%2036%2C1.78197514%2036%2C3.99742905%20L36%2C25.1917601%20C36%2C27.3994792%2034.4851438%2C30.1580906%2032.6302879%2C31.3444558%20L19.0975342%2C40%20L3.48057588%2C31.1594879%20C1.5583069%2C30.071322%200%2C27.407214%200%2C25.1917601%20L0%2C3.99742905%20Z%22%20id%3D%22path-1%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22mask-2%22%20maskContentUnits%3D%22userSpaceOnUse%22%20maskUnits%3D%22objectBoundingBox%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2236%22%20height%3D%2240%22%20fill%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23path-1%22%3E%3C/use%3E%0A%20%20%20%20%20%20%20%20%3C/mask%3E%0A%20%20%20%20%3C/defs%3E%0A%20%20%20%20%3Cg%20id%3D%22Symbols%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20stroke-opacity%3D%220.455219656%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22location-pin%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20fill%3D%22%23EE3124%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20id%3D%22Rectangle-10-Copy-3%22%20mask%3D%22url%28%23mask-2%29%22%20xlink%3Ahref%3D%22%23path-1%22%3E%3C/use%3E%0A%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%3C/g%3E%0A%20%20%20%20%3Ctext%20transform%3D%22translate%2819%2018.5%29%22%20fill%3D%22%23fff%22%20style%3D%22font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%3E',
      svgEnd: '</text>%0A</svg>',
      quotationDetails: [
        {
          startTime: "11:30 AM on Jan 5 2017",
          schedule: "Rescheduled",
          generatedTime: "Jan2, 2017",
          serviceName: "Brakes & Exhaust",
          serviceAccessories: "Brake Pads",
          accsessoriesCost: "3 AED",
        },
      ]

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

    this.state.jobCardDetails.map((value, key) => {
      if (value.latitude == map.latLng.lat() && value.longitude == map.latLng.lng()) {
        update = { ...value, pinImage: this.state.activeSvg + key + this.state.svgEnd, isActive: true };
      } else {
        update = { ...value, pinImage: this.state.svg + key + this.state.svgEnd, isActive: false };
      }
      newDetails.push(update);
    });
    this.setState({
      jobCardDetails: newDetails,
    });
  }

  ClickedQuoteCard(key) {
    let update, newArray = []
    this.state.jobCardDetails.map((val, index) => {
      if (index == key.key) {
        update = { ...val, isActive: true, pinImage: this.state.activeSvg + index + this.state.svgEnd }
      } else {
        update = { ...val, isActive: false, pinImage: this.state.svg + index + this.state.svgEnd }
      }
      newArray.push(update)
    })
    this.setState({
      jobCardDetails: newArray
    })
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
      return {
        lat: val.latitude, lng: val.longitude, pinImage: val.isActive ? this.state.activeSvg + (key+1) + this.state.svgEnd : this.state.svg + (key+1) + this.state.svgEnd
      }
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
              <div className="request-summary">
                <div className="row request-summary-header">
                  <div className="col-md-6 col-sm-12 col-xs-12 pad0">
                    <div className="request-summary-tab">
                      <div className="col-md-6">
                        <div className={this.state.jobUpdates == "details" ? "title active" : "title"} onClick={() => { this.jobDetail('details') }}>
                          <span>Job Details</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={this.state.jobUpdates == "quotes" ? "title active" : "title"} onClick={() => { this.jobDetail('quotes') }}>
                          <span>Quotes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row request-summary-body">
                  {this.state.jobUpdates == "details" && <div className="tab-jobDetails container">
                    <JobDetails />
                  </div>}
                  {this.state.jobUpdates == "quotes" && <div className="tab-quotes ">
                    <div className="col-md-6 clearfix left pad0">
                      <div className="quotes-view">
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
                        <div className="quotes-left-body">
                          <div className="wrapper">

                            <div>
                              {map(this.state.jobCardDetails, (val, key) => {
                                return (
                                  <QuotesCard activeClass={val.isActive ? "active" : ""} vendorName={val.name} index={key+1} rating={val.rating} distance={val.distance} reviews={val.review}
                                    viewPayment={this.viewPayment.bind(this)} viewMessaging={this.viewMessaging.bind(this)} ClickedQuoteCard={() => this.ClickedQuoteCard({ key })} />
                                );
                              })}
                            </div>
                            {/*}*/}
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 clearfix right pad0">
                      <div className={this.state.mapView == true ? "mapSection" : "mapSection hide"}>
                        <div className="quotes-right-body">
                          <Gmaps
                            center={{ lat: 12.9952672, lng: 77.5905857 }}
                            markers={{ jobCardLocation }}
                            markerClick={this.mapClick.bind(this)}
                            zoom={9}
                            containerElement={<div style={{ height: 100 + '%' }} />}
                            mapElement={<div style={{ height: 100 + '%' }} />}
                          />
                        </div>
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
                          <div className={this.state.quotation == true ? "quotes-quotation-Section" : "quotes-quotation-Section hide"}>
                            <div className="quotation-head">
                              <ul>
                                <li>
                                  <label>Job Start Time:</label>
                                  <span>{this.state.quotationDetails[0].startTime}</span>
                                </li>
                                <li>
                                  <label>Quote Generated:</label>
                                  <span>Jan 2, 2017</span>
                                </li>
                              </ul>
                            </div>
                            <div className="quotation-details">
                              <div className="quotation-block">
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
                              <div className="quotation-block">
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
                              <div className="quotation-total">
                                <label>Total</label>
                                <span>16 AED</span>
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
                  </div>}
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
