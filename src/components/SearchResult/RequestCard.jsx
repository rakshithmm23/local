import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { map, each, includes } from 'lodash';
import Badge from '../common/Badge';
import Button from '../common/Button';
import QuotesCard from './QuotesCard';
import Gmaps from '../MyRequest/Gmaps';
import IconNotification from '../common/IconNotification';
import { FormGroup, InputGroup, FormControl, Media } from 'react-bootstrap';
import JobDetails from './JobDetails';
import CustomScroll from 'react-custom-scroll';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import InputRange from 'react-input-range';
import ToggleSwitch from '@trendmicro/react-toggle-switch';
import TimePicker from 'rc-time-picker';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Switch from 'react-toggle-switch';
import Rating from 'react-rating';
import TimeInput from 'time-input';

export default class RequestCard extends Component {
  constructor(...args) {
    super(...args);
    this.toggleSwitchVal = { Open24_7: false, showFavourites: false, authorizedBusinesses: false, dealsOffers: false, byCash: true, byCreditcard: false }
    this.checkBox = { all: false, carService: false, carWash: false, carRepair: false }
    this.state = {
      locationSearch: {
        lat: undefined,
        lng: undefined,
        pinImage: ""
      },
      filterdropdownVisible: false,
      setCenter: false,
      mapsCenter: { lat: 12.9952672, lng: 77.5905857 },
      TimePickerFrom: '11:30 PM',
      TimePickerTo: "11:30 PM",
      switched: false,
      filterSort: "DistNF",
      filterdropdown: false,
      sortBydropdown: false,
      daySelected: {
        "sunday": false, "monday": false, "tuesday": false, "wednesday": false, "thrusday": false, "friday": false, "saturday": false
      },
      open: false,
      jobUpdates: "quotes",
      currentWidth: '',
      activelatitude: '',
      activelongitue: '',
      jobCardDetails: [
        {
          name: "1.Shine Works",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.9952672,
          longitude: 77.59058570000002,
          isActive: false,
          quotationDetails: [
            {
              startTime: "11:30 AM on Jan 5 2017",
              schedule: "Rescheduled",
              generatedTime: "Jan2, 2017",
              serviceIndex: "1",
              serviceName: "Brakes & Exhaust",
              Accessories: [
                {
                  name: "Brake Pads",
                  cost: 10,
                  currency: "AED"
                }, {
                  name: "Brake Oil Change",
                  cost: 75,
                  currency: "AED"
                }, {
                  name: "Brake Shoes",
                  cost: 10,
                  currency: "AED"
                }, {
                  name: "Brake Wire",
                  cost: 5,
                  currency: "AED"
                }
              ],
            }, {
              startTime: "11:30 AM on Jan 5 2017",
              schedule: "Rescheduled",
              generatedTime: "Jan2, 2017",
              serviceIndex: "2",
              serviceName: "AC Heating & Cooling",
              Accessories: [
                {
                  name: "Coolent Change",
                  cost: 60,
                  currency: "AED"
                }, {
                  name: "AC Pipe Change",
                  cost: 35,
                  currency: "AED"
                }
              ],
            },
          ]
        }, {
          name: "2. Shine Works",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.7952672,
          longitude: 77.29058570000007,
          isActive: false
        }, {
          name: "3. Shine Works",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.4952672,
          longitude: 77.59058570000002,
          isActive: false
        }, {
          name: "4. Shine Works",
          rating: 4,
          distance: 3.2,
          review: 23,
          latitude: 12.4952672,
          longitude: 77.1105857,
          isActive: false
        },
        {
          name: "5. Shine Works",
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
      activeSvg: 'data:image/svg+xml,%3Csvg%20width%3D%2236px%22%20height%3D%2240px%22%20viewBox%3D%220%200%2036%2040%22%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%20%20%20%20%3C%21--%20Generator%3A%20Sketch%2042%20%2836781%29%20-%20http%3A//www.bohemiancoding.com/sketch%20--%3E%0A%20%20%20%20%3Ctitle%3Elocation-pin%20copy%209%3C/title%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C/desc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C3.99742905%20C0%2C1.78970995%201.7852456%2C0%203.99017859%2C0%20L32.0098214%2C0%20C34.2135362%2C0%2036%2C1.78197514%2036%2C3.99742905%20L36%2C25.1917601%20C36%2C27.3994792%2034.4851438%2C30.1580906%2032.6302879%2C31.3444558%20L19.0975342%2C40%20L3.48057588%2C31.1594879%20C1.5583069%2C30.071322%200%2C27.407214%200%2C25.1917601%20L0%2C3.99742905%20Z%22%20id%3D%22path-1%22%3E%3C/path%3E%0A%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22mask-2%22%20maskContentUnits%3D%22userSpaceOnUse%22%20maskUnits%3D%22objectBoundingBox%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2236%22%20height%3D%2240%22%20fill%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23path-1%22%3E%3C/use%3E%0A%20%20%20%20%20%20%20%20%3C/mask%3E%0A%20%20%20%20%3C/defs%3E%0A%20%20%20%20%3Cg%20id%3D%22Symbols%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20stroke-opacity%3D%220.455219656%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22location-pin-copy-9%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20fill%3D%22%2323AE49%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20id%3D%22Rectangle-10-Copy-3%22%20mask%3D%22url%28%23mask-2%29%22%20xlink%3Ahref%3D%22%23path-1%22%3E%3C/use%3E%0A%20%20%20%20%20%20%20%20%3C/g%3E%0A%20%20%20%20%3C/g%3E%0A%3Ctext%20transform%3D%22translate%2818.5%2021%29%22%20fill%3D%22%23fff%22%20style%3D%22font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%3E',
      svg: 'data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2236px%22%20height%3D%2240px%22%20viewBox%3D%220%200%2036%2040%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2042%20(36781)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3ERectangle%2010%20Copy%203%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C3.99742905%20C0%2C1.78970995%201.7852456%2C0%203.99017859%2C0%20L32.0098214%2C0%20C34.2135362%2C0%2036%2C1.78197514%2036%2C3.99742905%20L36%2C25.1917601%20C36%2C27.3994792%2034.4851438%2C30.1580906%2032.6302879%2C31.3444558%20L19.0975342%2C40%20L3.48057588%2C31.1594879%20C1.5583069%2C30.071322%200%2C27.407214%200%2C25.1917601%20L0%2C3.99742905%20Z%22%20id%3D%22path-1%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22mask-2%22%20maskContentUnits%3D%22userSpaceOnUse%22%20maskUnits%3D%22objectBoundingBox%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2236%22%20height%3D%2240%22%20fill%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0A%20%20%20%20%20%20%20%20%3C%2Fmask%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Symbols%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20stroke-opacity%3D%220.455219656%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22location-pin%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%224%22%20fill%3D%22%23EE3124%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20id%3D%22Rectangle-10-Copy-3%22%20mask%3D%22url(%23mask-2)%22%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Ctext%20transform%3D%22translate(18.5%2021)%22%20fill%3D%22%23fff%22%20style%3D%22font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%3E',
      svgEnd: '</text>%0A</svg>',
      distValue: { min: 2, max: 10 },
      priceValue: { min: 10, max: 70 },
      ratingValue: 0,
      inValidTime: false,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.windowWidth = this.windowWidth.bind(this);
  }
  TimePickerChange(type, value) {
    // if (type == "timeFrom") {
    //   this.setState({ TimePickerFrom: value });
    // } else {
    //   this.setState({ TimePickerTo: value });
    // }
  }

  jobDetail(val) {
    this.setState({ jobUpdates: val });
  }

  componentWillMount() {
    this.updateDimensions();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    document.body.addEventListener('mousedown', this.bodyClick.bind(this));
  }
  showPosition(position) {
    let positionVal = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      pinImage: '../../images/map_blue_pointer.png'
    }
    this.setState({ locationSearch: positionVal })

  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('mousedown', this.bodyClick.bind(this));
  }
  bodyClick(e) {
    if (e.target.className == "TimeInput-input") {
      this.setState({ filterdropdownVisible: true })
    } else {
      this.setState({ filterdropdownVisible: false })
    }
  }
  filterDropDownFunc(e) {
    if (!this.state.filterdropdownVisible) {
      this.setState({ filterdropdown: e })
    }
  }
  changeCheckbox(val) {
    if (val == "all") {
      if (this.checkBox.all == false) {
        this.checkBox = { all: true, carService: true, carWash: true, carRepair: true }
      } else {
        this.checkBox = { all: false, carService: false, carWash: false, carRepair: false }
      }
    } else {
      this.checkBox["all"] = false
      this.checkBox[val] = !this.checkBox[val]
    }

    this.setState({ checkBoxVal: !this.state.checkBoxVal })
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
    this.setState({
      scrollTo: Object.keys(this.currentTopEle).length>0? ReactDOM.findDOMNode(this.currentTopEle).getBoundingClientRect().top: 0
    });
  }
  ClickedQuoteCard(key) {
    let update, newArray = [], centerLat = undefined, centerLng = undefined
    this.state.jobCardDetails.map((val, index) => {
      if (index == key.key) {
        update = { ...val, isActive: true, pinImage: this.state.activeSvg + index + this.state.svgEnd }
        centerLat = val.latitude, centerLng = val.longitude
      } else {
        update = { ...val, isActive: false, pinImage: this.state.svg + index + this.state.svgEnd }
      }
      newArray.push(update)
    })
    this.setState({
      jobCardDetails: newArray,
      mapsCenter: { lat: centerLat, lng: centerLng },
      setCenter: true
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
  day(selDay) {
    let days = { ...this.state.daySelected }
    days[selDay] = !this.state.daySelected[selDay]
    this.setState({
      daySelected: days
    })
  }
  filterOption(val) {
    this.setState({ filterSort: val, sortBydropdown: false })
  }
  switch(val) {
    this.toggleSwitchVal[val] = !this.toggleSwitchVal[val];
    if (val == 'byCash') {
      this.toggleSwitchVal.byCreditcard = false;
    } else if (val == 'byCreditcard') {
      this.toggleSwitchVal.byCash = false;
    }
    this.setState({ switched: !this.state.switched })
  }

  clearFilter(e) {

    this.checkBox = { all: false, carService: false, carWash: false, carRepair: false }
    this.toggleSwitchVal = { Open24_7: false, showFavourites: false, authorizedBusinesses: false, dealsOffers: false, byCash: true, byCreditcard: false }
    this.setState({
      ratingValue: 0, inValidTime: false, TimePickerFrom: undefined, TimePickerTo: undefined, distValue: { min: 2, max: 10 }, priceValue: { min: 10, max: 70 }, daySelected: {
        "sunday": false, "monday": false, "tuesday": false, "wednesday": false, "thrusday": false, "friday": false, "saturday": false
      }
    })
  }
  ratingOnChange(rating) {
    this.setState({ ratingValue: rating })

  }
  filterSelect() {
    if (this.state.TimePickerFrom > this.state.TimePickerTo) {
      this.setState({ inValidTime: true })
    } else {
      this.setState({ inValidTime: false })
    }

    // console.log(this.state.TimePickerTo)
  }
  setCenter(){
    this.setState({ setCenter: true })
  }
  mapMoved(){
    this.setState({ setCenter: false })
  }


  render() {
    //console.log(this.state.currentWidth)
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
        lat: val.latitude, lng: val.longitude, pinImage: val.isActive ? this.state.activeSvg + (key + 1) + this.state.svgEnd : this.state.svg + (key + 1) + this.state.svgEnd,
        name: val.name,
        rating: val.rating,
        distance: val.distance,
        review: val.review,

      }
    })
    const jobLocationCurrentLocation = jobCardLocation.push(this.state.locationSearch)
    const formatFrom = 'h:mm a';
    const formatTo = 'h:mm a';

    const jobDataList = map(jobData, (item, key) => {
      return (
        <div key={key}>


          <div className="requestSection vendor-list-view">
            <div className="row">
              <div className="request-summary">

                <div className="row request-summary-body">
                  {this.state.jobUpdates == "details" && <div className="tab-jobDetails container">
                    <JobDetails />
                  </div>}
                  {this.state.jobUpdates == "quotes" && <div className="tab-quotes ">
                    <div className="col-md-6 clearfix left pad0" >
                      <div className="quotes-view">
                        <div className="title">
                          <span>5 Results Found</span>
                          <div className="filterSection">

                            <DropdownButton bsSize="small" id="dropdown-size-small" open={this.state.sortBydropdown} onToggle={(e) => { this.setState({ sortBydropdown: e }) }} noCaret title={
                              <div className="filterLabel showSortBy">
                                <i className="mdi mdi-swap-vertical" />
                                <label>Sort by</label>
                                <i className={this.state.sortBydropdown ? "mdi mdi-chevron-up downIcon downAlign pull-right" : "mdi mdi-chevron-down downIcon downAlign pull-right"} />
                              </div>
                            }>
                              <div className="sortFilter filterCard">
                                <ul className="list-unstyled">
                                  <li onClick={() => (this.filterOption("DistNF"))} className={this.state.filterSort == "DistNF" ? "active" : ""}>
                                    <label>
                                      Distance - Near to Far
                                </label>
                                    <span>
                                      <i className={this.state.filterSort == "DistNF" ? "mdi mdi-check active" : "hide"} />
                                    </span>
                                  </li>
                                  <li onClick={() => (this.filterOption("DistFN"))} className={this.state.filterSort == "DistFN" ? "active" : ""}>
                                    <label>
                                      Distance - Far to Near
                                </label>
                                    <span>
                                      <i className={this.state.filterSort == "DistFN" ? "mdi mdi-check active" : "hide"} />
                                    </span>
                                  </li>
                                  <li onClick={() => (this.filterOption("ratingHL"))} className={this.state.filterSort == "ratingHL" ? "active" : ""}>
                                    <label>
                                      Rating - Highest to Lowest
                                </label>
                                    <span>
                                      <i className={this.state.filterSort == "ratingHL" ? "mdi mdi-check active" : "hide"} />
                                    </span>
                                  </li>
                                  <li onClick={() => (this.filterOption("ratingLH"))} className={this.state.filterSort == "ratingLH" ? "active" : ""}>
                                    <label>
                                      Rating - Lowest to Highest
                                </label>
                                    <span>
                                      <i className={this.state.filterSort == "ratingLH" ? "mdi mdi-check active" : "hide"} />
                                    </span>
                                  </li>
                                  <li onClick={() => (this.filterOption("priceHL"))} className={this.state.filterSort == "priceHL" ? "active" : ""}>
                                    <label>
                                      Price - Highest to Lowest
                              </label>
                                    <span>
                                      <i className={this.state.filterSort == "priceHL" ? "mdi mdi-check active" : "hide"} />
                                    </span>
                                  </li>
                                  <li onClick={() => (this.filterOption("priceLH"))} className={this.state.filterSort == "priceLH" ? "active" : ""}>
                                    <label>
                                      Price - Lowest to Highest
                              </label>
                                    <span>
                                      <i className={this.state.filterSort == "priceLH" ? "mdi mdi-check active" : "hide"} />
                                    </span>
                                  </li>
                                  <li onClick={() => (this.filterOption("dateNO"))} className={this.state.filterSort == "dateNO" ? "active" : ""}>
                                    <label>
                                      Date - Newest to Oldest
                              </label>
                                    <span>
                                      <i className={this.state.filterSort == "dateNO" ? "mdi mdi-check active" : "hide"} />
                                    </span>
                                  </li>
                                  <li onClick={() => (this.filterOption("dateON"))} className={this.state.filterSort == "dateON" ? "active" : ""}>
                                    <label>
                                      Date - Oldest to Newest
                              </label>
                                    <span>
                                      <i className={this.state.filterSort == "dateON" ? "mdi mdi-check active" : "hide"} />
                                    </span>
                                  </li>

                                </ul>
                              </div>
                            </DropdownButton>
                          </div>
                          <div className="filterSection">

                            <DropdownButton bsSize="large" open={this.state.filterdropdown} onToggle={(e) => { this.filterDropDownFunc(e) }} noCaret id="dropdown-size-large" title={
                              <div className="filterLabel showFilters ">
                                <i className="mdi mdi-filter-variant" />
                                <label>Filter</label>
                                <i className={this.state.filterdropdown ? "mdi mdi-chevron-up downIcon pull-right" : "mdi mdi-chevron-down downIcon pull-right"} />
                              </div>
                            }>
                              <div className="Filterby filterCard filter-dropdown">
                                <div className="row">
                                  <div className="col-md-6 left">
                                    <div className="filterby-wrapper">
                                      <div className="f-card">
                                        <h5>Service Type</h5>
                                        <div className="row">
                                          <div className="col-md-6 pad0">
                                            <label className="checkbox-style"><input type="checkbox" value="" checked={this.checkBox.all} onChange={this.changeCheckbox.bind(this, 'all')} />All</label>
                                            <label className="checkbox-style"><input type="checkbox" value="" checked={this.checkBox.carWash} onChange={this.changeCheckbox.bind(this, 'carWash')} />Car Wash</label>
                                          </div>
                                          <div className="col-md-6">
                                            <label className="checkbox-style"><input type="checkbox" value="" checked={this.checkBox.carService} onChange={this.changeCheckbox.bind(this, "carService")} />Car Service</label>
                                            <label className="checkbox-style"><input type="checkbox" value="" checked={this.checkBox.carRepair} onChange={this.changeCheckbox.bind(this, "carRepair")} />Car Repair</label>
                                          </div>

                                        </div>
                                      </div>
                                      <div className="f-card">
                                        <h5>Distance</h5>
                                        <InputRange
                                          formatLabel={distValue => `${distValue}km`}
                                          minValue={0}
                                          maxValue={20}
                                          value={this.state.distValue}
                                          onChange={distValue => this.setState({ distValue })} />
                                        <span className="range-min">{this.state.distValue.min + " Km"}</span>
                                        <span className="range-max">{this.state.distValue.max + " Km"}</span>
                                      </div>
                                      <div className="f-card openAlign">
                                        <h5>Open Between</h5>
                                        <ul className="list-unstyled">
                                          <li className={this.state.daySelected["sunday"] ? 'active' : ''} onClick={this.day.bind(this, "sunday")}>SUN</li>
                                          <li className={this.state.daySelected["monday"] ? 'active' : ''} onClick={this.day.bind(this, "monday")}>MON</li>
                                          <li className={this.state.daySelected["tuesday"] ? 'active' : ''} onClick={this.day.bind(this, "tuesday")}>TUE</li>
                                          <li className={this.state.daySelected["wednesday"] ? 'active' : ''} onClick={this.day.bind(this, "wednesday")}>wed</li>
                                          <li className={this.state.daySelected["thrusday"] ? 'active' : ''} onClick={this.day.bind(this, "thrusday")}>thu</li>
                                          <li className={this.state.daySelected["friday"] ? 'active' : ''} onClick={this.day.bind(this, "friday")}>fri</li>
                                          <li className={this.state.daySelected["saturday"] ? 'active' : ''} onClick={this.day.bind(this, "saturday")}>sat</li>
                                        </ul>
                                        <TimeInput value={this.state.TimePickerFrom} onChange={(e)=>this.setState({TimePickerFrom:e})}/>
                                        <span className="time-to-time">to</span>
                                        <TimeInput value={this.state.TimePickerTo} onChange={(e)=>this.setState({TimePickerTo:e})}/>
                                        <span className={this.state.inValidTime ? "time-error" : "time-error hide"} >Invalid time format</span>
                                      </div>


                                    </div>
                                  </div>
                                  <div className="col-md-6 right toggleBtn">
                                    <div className="filterby-wrapper">
                                      <div className="f-card toggleBtn">
                                        <h5>Open 24/7</h5>
                                        <ToggleSwitch
                                          checked={this.toggleSwitchVal.Open24_7}
                                          size="small"
                                          onChange={this.switch.bind(this, 'Open24_7')}
                                          ref={(node) => {
                                            this.toggleSwitch = node;
                                          }}
                                        />
                                      </div>
                                      <div className="f-card star-rating">
                                        <h5>Rating</h5>
                                        <Rating
                                          empty="mdi mdi-star-outline "
                                          full="mdi mdi-star active-star"
                                          initialRate={this.state.ratingValue}
                                          onChange={(e) => { this.ratingOnChange(e) }}
                                        />
                                      </div>
                                      <div className="f-card">
                                        <h5>Only show favourites</h5>
                                        <ToggleSwitch
                                          checked={this.toggleSwitchVal.showFavourites}
                                          size="small"
                                          onChange={this.switch.bind(this, 'showFavourites')}
                                          ref={(node) => {
                                            this.toggleSwitch = node;
                                          }}
                                        />
                                      </div>
                                      <div className="f-card ">
                                        <h5>Only show Authorized Businesses</h5>
                                        <ToggleSwitch
                                          checked={this.toggleSwitchVal.authorizedBusinesses}
                                          size="small"
                                          onChange={this.switch.bind(this, 'authorizedBusinesses')}
                                          size="small"
                                          ref={(node) => {
                                            this.toggleSwitch = node;
                                          }}
                                        />
                                      </div>
                                      <div className="f-card ">
                                        <h5>Only show Businesses with Deals & Offers</h5>
                                        <ToggleSwitch
                                          checked={this.toggleSwitchVal.dealsOffers}
                                          size="small"
                                          onChange={this.switch.bind(this, 'dealsOffers')}
                                          ref={(node) => {
                                            this.toggleSwitch = node;
                                          }}
                                        />
                                      </div>
                                      <div className="f-card payment-type">
                                        <h5>Payment by</h5>
                                        <div className="holder">
                                          <span className="pad0">Pay by cash</span>
                                          <ToggleSwitch
                                            checked={this.toggleSwitchVal.byCash}
                                            size="small"
                                            onChange={this.switch.bind(this, 'byCash')}
                                            ref={(node) => {
                                              this.toggleSwitch = node;
                                            }}
                                          />
                                        </div>
                                        <div className="holder">
                                          <span className="">Pay by credit card</span>
                                          <ToggleSwitch
                                            checked={this.toggleSwitchVal.byCreditcard}
                                            size="small"
                                            onChange={this.switch.bind(this, 'byCreditcard')}
                                            ref={(node) => {
                                              this.toggleSwitch = node;
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-12 footer">
                                    <a onClick={this.clearFilter.bind(this)}>Clear</a>
                                    <Button backgroundColor="red" btnType="submit" btnSize="sm" fontSize={15} label="Apply" btnCallBack={this.filterSelect.bind(this)} />
                                  </div>
                                </div>
                              </div>
                            </DropdownButton>
                          </div>
                        </div>
                        <div className="quotes-left-body">
                          <div className="requestQuotesScroll">
                            <CustomScroll heightRelativeToParent="calc(100%)" allowOuterScroll={true} scrollTo={this.state.scrollTo}>
                              <div className="wrapper" ref={'quotesList'}>

                                <div>
                                  {map(this.state.jobCardDetails, (val, key) => {
                                    return (
                                      <QuotesCard key={key} ref={(quotesCard) => { val.isActive ? this.currentTopEle = quotesCard : '' }} activeClass={val.isActive ? "active" : ""} vendorName={val.name} rating={val.rating} distance={val.distance} reviews={val.review}
                                        viewPayment={this.viewPayment.bind(this)} viewMessaging={this.viewMessaging.bind(this)} ClickedQuoteCard={() => this.ClickedQuoteCard({ key })} />
                                    );
                                  })}
                                </div>
                                {/*}*/}
                              </div>
                            </CustomScroll>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 clearfix right pad0">
                      <div className={this.state.mapView == true ? "mapSection" : "mapSection hide"}>
                        <div className="quotes-right-body">
                          <Gmaps
                          mapDrag={this.mapMoved.bind(this)}
                            setCenter={this.state.setCenter}
                            center={this.state.mapsCenter}
                            infoPopUp={true}
                            markers={{ jobCardLocation }}
                            markerClick={this.mapClick.bind(this)}
                            zoom={9}
                            containerElement={<div style={{ height: 100 + '%' }} />}
                            mapElement={<div style={{ height: 100 + '%' }} />}
                          />
                          <span onClick={this.setCenter.bind(this)} className="current-position"><i className="mdi mdi-crosshairs-gps"></i></span>



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
                          <div className="requestQuotesScroll">
                            {/*Quotation*/}
                            <div className={this.state.quotation == true ? "quotes-quotation-Section" : "quotes-quotation-Section hide"}>
                              <CustomScroll heightRelativeToParent="calc(100%)" allowOuterScroll={true}>
                                <div className="quotation-head">
                                  <ul>
                                    <li>
                                      <label>Job Start Time:</label>
                                      <span>{this.state.jobCardDetails[0].quotationDetails[0].startTime} ({this.state.jobCardDetails[0].quotationDetails[0].schedule})</span>
                                    </li>
                                    <li>
                                      <label>Quote Generated:</label>
                                      <span>{this.state.jobCardDetails[0].quotationDetails[0].generatedTime}</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="quotation-details">
                                  {map(this.state.jobCardDetails, (CardValue, jobCardKey) => {
                                    return (
                                      CardValue.quotationDetails != undefined &&
                                      <div className="quotation-block" key={jobCardKey}>
                                        {map(CardValue.quotationDetails, (cardvQuote, quotationKey) => {
                                          return (
                                            <div>
                                              <h4 key={quotationKey}>{cardvQuote.serviceIndex}. {cardvQuote.serviceName}</h4>
                                              <ul>
                                                {map(cardvQuote.Accessories, (carAcc, accessoriesKey) => {
                                                  return (
                                                    <li key={accessoriesKey}>
                                                      <label>{carAcc.name}</label>
                                                      <span>{carAcc.cost} {carAcc.currency}</span>
                                                    </li>
                                                  )
                                                })}
                                              </ul>
                                            </div>
                                          );
                                        })}

                                      </div>
                                    );
                                  })}
                                  <div className="quotation-total">
                                    <label>Total</label>
                                    <span>195 AED</span>
                                  </div>
                                </div>
                              </CustomScroll>
                            </div>
                            {/*ChatBox*/}
                            <div className={this.state.messages == true ? "quotes-message-Section" : "quotes-message-Section hide"}>
                              <div className="quotes-chat-area">
                                <CustomScroll heightRelativeToParent="calc(100%)" allowOuterScroll={true}>

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
                                  <div className="c-message message-out message-continuation">
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
                                  <div className="c-message message-out chain-msg">
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
                                  <div className="c-message message-in message-continuation">
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
                                  <div className="c-message message-in chain-msg message-continuation">
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
                                  <div className="c-message message-in chain-msg">
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
                                </CustomScroll>
                              </div>
                              <div className="quotes-message-footer">
                                <FormGroup>
                                  <InputGroup>
                                    <FormControl type="text" placeholder="Type your message here..." />
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
