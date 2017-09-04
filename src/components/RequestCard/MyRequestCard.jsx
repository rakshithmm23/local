import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import CardView from './CardView';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Button from '../common/Button';
import ToggleSwitch from '@trendmicro/react-toggle-switch';

export default class MyRequestCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.requestStatus = { all: false, waiting: false, active: false, accepted: false, inProgress: false, completed: false, cancelled: false, expired: false }
    this.serviceType = { all: false, wash: false, service: false, repair: false, emergency: false }
    this.toggleNotification = this.toggleNotification.bind(this);
    this.state = {
      notificationVisible: false,
      messageVisible: false,
      activeTab: "OpenItems",
      sortByVal: "",
      filterSort: false,
      filterdropdown: false,
      showUrgent: false,
      chkbox: false
    };
  }

  toggleNotification(isVisible) {
    this.setState({ 'notificationVisible': isVisible });
  }
  toggleMessage(isVisible) {
    this.setState({ 'messageVisible': isVisible });
  }
  requestStatusCheckbox(chkbox) {
    if (chkbox == "all") {
      if (this.requestStatus.all == false) {
        this.requestStatus = { all: true, waiting: true, active: true, accepted: true, inProgress: true, completed: true, cancelled: true, expired: true }
      } else {
        this.requestStatus = { all: false, waiting: false, active: false, accepted: false, inProgress: false, completed: false, cancelled: false, expired: false }
      }
    } else {
      this.requestStatus["all"] = false
      this.requestStatus[chkbox] = !this.requestStatus[chkbox]
    }
    this.setState({ chkbox: !this.state.chkbox })

  }
  requestTypeCheckbox(chkbox){
    if (chkbox == "all") {
      if (this.serviceType.all == false) {
        this.serviceType = { all: true, wash: true, service: true, repair: true, emergency: true }
      } else {
        this.serviceType = { all: false, wash: false, service: false, repair: false, emergency: false }
      }
    } else {
      this.serviceType["all"] = false
      this.serviceType[chkbox] = !this.serviceType[chkbox]
    }
    this.setState({ chkbox: !this.state.chkbox })

  }
  clearFilter(){
    this.requestStatus = { all: false, waiting: false, active: false, accepted: false, inProgress: false, completed: false, cancelled: false, expired: false }
    this.serviceType = { all: false, wash: false, service: false, repair: false, emergency: false }
    this.setState({showUrgent:false,chkbox: !this.state.chkbox})
  }



render() {
  const openJobData = [
    {
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'accepted',
      totalTask: 14,
      vendorDetails: {
        vendor: 'Buddy’s Car Service',
        vendorPlace: '3916 Address Tower, Street Name, Dubai',
        vendorMobile: '+971 919 233 470',
        quote: '200 AED',
      },
      statusStep: true,
      statusPopup: [{
        imgClassName: 'statusIcon',
        statusDescription: 'Door Locking Mechanisms and Windows',
        statusTime: '09 Mar 15 11:00 AM',
        statusMessage: 'On going'
      }, {
        imgClassName: 'statusIcon',
        statusDescription: 'Door Locking Mechanisms and Windows',
        statusTime: '09 Mar 15 11:00 AM',
        statusMessage: 'On going'
      }, {
        imgClassName: 'statusIcon',
        statusDescription: 'Door Locking Mechanisms and Windows',
        statusTime: '09 Mar 15 11:00 AM',
        statusMessage: 'On going'
      }


      ],
      route: "/request/accepted"
    },
    {
      route: "/request/waiting",
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani1',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'waiting',
      jobInfoMessage: 'Your request #9596378 has been placed successfully. Our vendors are ' +
      'currently assessing your application and will get back with their quotes soon.',
    },
    {
      route: "/request/active",
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani2',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'active',
      jobInfoMessage: 'You have received 2 new quotes and 3 new messages.' +
      'Start a chat with the vendors to define the scope of work and negotiate the quotation.'
    },

    {
      route: "/request/inprogress",
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'inProgress',
      totalTask: 4,
      vendorDetails:
      {
        vendor: 'Buddy’s Car Service',
        vendorPlace: '3916 Address Tower, Street Name, Dubai',
        vendorMobile: '+971 919 233 470',
        quote: '200 AED',
        totalTask: 8,
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
      route: "/request/completed",
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'completed',
      totalTask: 7,
      vendorDetails:
      {
        vendor: 'Buddy’s Car Service',
        vendorPlace: '3916 Address Tower, Street Name, Dubai, 3916 Address Tower, Street Name, Dubai',
        vendorMobile: '+971 919 233 470',
        quote: '200 AED',

      },
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
      route: "/request/cancelled",
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'cancelled',
      jobInfoMessage: 'Sorry, your request was cancelled by the vendor. We apologise for the inconvenience caused.' +
      'Kindly re-book the request and give us a chance to serve you to our best capacity.'
    },
    {

      route: "/request/expired",
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'expired',
      jobInfoMessage: 'Sorry, your request was cancelled by the vendor. We apologise for the inconvenience caused.' +
      'Kindly re-book the request and give us a chance to serve you to our best capacity.',
    }
  ];
  const closedJobData = [
    {
      route: "/request/completed",
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'completed',
      totalTask: 7,
      vendorDetails:
      {
        vendor: 'Buddy’s Car Service',
        vendorPlace: '3916 Address Tower, Street Name, Dubai, 3916 Address Tower, Street Name, Dubai',
        vendorMobile: '+971 919 233 470',
        quote: '200 AED',

      },
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
      route: "/request/cancelled",
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'cancelled',
      jobInfoMessage: 'Sorry, your request was cancelled by the vendor. We apologise for the inconvenience caused.' +
      'Kindly re-book the request and give us a chance to serve you to our best capacity.'
    },
    {

      route: "/request/expired",
      carImage: '../../images/car.jpg',
      customerName: 'Bala Subramani',
      serviceTypes: 'Emergency Service',
      customeId: '12345678',
      startDate: '09 Mar17, 11:00 AM',
      statusIndicator: 'expired',
      jobInfoMessage: 'Sorry, your request was cancelled by the vendor. We apologise for the inconvenience caused.' +
      'Kindly re-book the request and give us a chance to serve you to our best capacity.',
    }
  ];
  return (
    <div className="jobUpdate">
      {/*Header*/}
      <Header notificationCount={2} profileName="Derrick Frank" notificationCallBack={this.toggleNotification} messageCallBack={this.toggleMessage.bind(this)} router={this.props.router} actions={this.props.actions} />
      <MobileNotification isVisible={this.state.notificationVisible} backBtnCallBack={this.toggleNotification} />
      <MobileMessage isVisible={this.state.messageVisible} backBtnCallBack={this.toggleMessage.bind(this)} />
      <div className="main-wrapper">
        {/*Sidebar*/}
        <Sidebar router={this.props.router} />
        {/*message*/}
        {/*<Extra message="Your email account has been verified. We are open for service!" />*/}
        <div className="page-sec-header">
          <div className="padwrapper">
            <h4>My Request</h4>
          </div>

        </div>
        <div className="inSection">
          <div className="padwrapper">
            <div className="sub-header">
              <div className="tab">
                <span className={this.state.activeTab == "OpenItems" ? "active" : ""} onClick={() => this.setState({ activeTab: "OpenItems" })}>{openJobData.length + " Open"} </span>
              </div>
              <div className="tab">
                <span className={this.state.activeTab == "CloseItems" ? "active" : ""} onClick={() => this.setState({ activeTab: "CloseItems" })}>{closedJobData.length + " Closed"}</span>
              </div>
              <div className="filterSection sort-request-card">

                <DropdownButton bsSize="small" id="dropdown-size-small" pullRight open={this.state.sortBydropdown} onToggle={(e) => { this.setState({ sortBydropdown: e }) }} noCaret title={
                  <div className="filterLabel showSortBy">
                    <i className="mdi mdi-swap-vertical" />
                    <label>Sort by</label>
                    <i className={this.state.sortBydropdown ? "mdi mdi-chevron-up downIcon downAlign pull-right" : "mdi mdi-chevron-down downIcon downAlign pull-right"} />
                  </div>
                }>
                  <div className="sortFilter filterCard">
                    <ul className="list-unstyled">

                      <li onClick={() => this.setState({ filterSort: "dateNO" })} className={this.state.filterSort == "dateNO" ? "active" : ""}>
                        <label>
                          Date - Newest to Oldest
                          </label>
                        <span>
                          <i className={this.state.filterSort == "dateNO" ? "mdi mdi-check active" : "hide"} />
                        </span>
                      </li>

                      <li onClick={() => this.setState({ filterSort: "dateON" })} className={this.state.filterSort == "dateON" ? "active" : ""}>
                        <label>
                          Date - Newest to Oldest
                          </label>
                        <span>
                          <i className={this.state.filterSort == "dateON" ? "mdi mdi-check active" : "hide"} />
                        </span>
                      </li>
                    </ul>
                  </div>
                </DropdownButton>
              </div>
              <div className="filterSection request-card">

                <DropdownButton bsSize="large" open={this.state.filterdropdown} onToggle={(e) => this.setState({ filterdropdown: e })} pullRight noCaret id="dropdown-size-large" title={
                  <div className="filterLabel showFilters ">
                    <i className="mdi mdi-filter-variant" />
                    <label>Filter</label>
                    <i className={this.state.filterdropdown ? "mdi mdi-chevron-up downIcon pull-right" : "mdi mdi-chevron-down downIcon pull-right"} />
                  </div>
                }>
                  <div className="Filterby filterCard">
                    <div className="row">
                      <div className="col-md-6 left">
                        <div className="filterby-wrapper">
                          <div className="f-card">
                            <h5>Request Status</h5>
                            <div className="row">
                              <div className="col-md-6 pad0">
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.requestStatus.all} onChange={this.requestStatusCheckbox.bind(this, 'all')} />All</label>
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.requestStatus.active} onChange={this.requestStatusCheckbox.bind(this, 'active')} />Active</label>
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.requestStatus.inProgress} onChange={this.requestStatusCheckbox.bind(this, 'inProgress')} />In Progress</label>
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.requestStatus.cancelled} onChange={this.requestStatusCheckbox.bind(this, 'cancelled')} />Cancelled</label>

                              </div>
                              <div className="col-md-6">
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.requestStatus.waiting} onChange={this.requestStatusCheckbox.bind(this, 'waiting')} />Waiting</label>
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.requestStatus.accepted} onChange={this.requestStatusCheckbox.bind(this, 'accepted')} />Accepted</label>
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.requestStatus.completed} onChange={this.requestStatusCheckbox.bind(this, 'completed')} />Completed</label>
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.requestStatus.expired} onChange={this.requestStatusCheckbox.bind(this, 'expired')} />Expired</label>
                              </div>


                            </div>
                          </div>
                          <div className="f-card">
                            <div className="form-section">
                              <h5>Car Profile</h5>
                              <div className="model-select">
                                <select className="car-selection ">
                                  <option value="select">Select Car Brand</option>
                                  <option value="volvo">Volvo</option>
                                  <option value="saab">Saab</option>
                                  <option value="mercedes">Mercedes</option>
                                  <option value="audi">Audi</option>
                                </select>
                                <i className="mdi mdi-chevron-down" />
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="col-md-6 right toggleBtn">
                        <div className="filterby-wrapper">
                          <div className="f-card">
                            <h5>Service Type</h5>
                            <div className="row">
                              <div className="col-md-6 pad0">
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.serviceType.all} onChange={this.requestTypeCheckbox.bind(this, 'all')} />All</label>
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.serviceType.service} onChange={this.requestTypeCheckbox.bind(this, 'service')} />Car Service</label>
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.serviceType.emergency} onChange={this.requestTypeCheckbox.bind(this, 'emergency')} />Emergency</label>
                              </div>
                              <div className="col-md-6">
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.serviceType.wash} onChange={this.requestTypeCheckbox.bind(this, 'wash')} />Car Wash</label>
                                <label className="checkbox-style"><input type="checkbox" value="" checked={this.serviceType.repair} onChange={this.requestTypeCheckbox.bind(this, 'repair')} />Car Repair</label>


                              </div>


                            </div>
                          </div>
                          <div className="f-card">
                            <h5>Payment by</h5>
                            <div className="holder">
                              <span className="pad0">Pay by cash</span>
                              <ToggleSwitch
                                checked={this.state.showUrgent}
                                size="small"
                                onChange={() => this.setState({ showUrgent: !this.state.showUrgent })}
                                ref={(node) => {
                                  this.toggleSwitch = node;
                                }}
                              />
                            </div>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 footer">
                        <a onClick={(e) => { this.clearFilter(e) }}>Clear</a>
                        <Button backgroundColor="red" btnType="submit" btnSize="sm" fontSize={15} label="Apply" />
                      </div>
                    </div>
                  </div>
                </DropdownButton>
              </div>
            </div>
            <div className="card-view-holder">
              {this.state.activeTab == "OpenItems" && <CardView router={this.props.router} data={openJobData} />}
              {this.state.activeTab == "CloseItems" && <CardView router={this.props.router} data={closedJobData} />}
            </div>
          </div>
        </div>
      </div>
      <div className="footerSection">
        {/*AppLink*/}
        <AppLink />
        {/*Footer*/}
        <Footer />
      </div>

    </div>
  );
}
}

