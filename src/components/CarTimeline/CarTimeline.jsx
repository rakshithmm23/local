import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import Button from '../common/Button';
import OtherDetails from './OtherDetails';
import ServiceDetails from './ServiceDetails';
import Timeline from './Timeline';
import { Scrollbars } from 'react-custom-scrollbars';
import { DropdownButton, MenuItem, Modal, Media } from 'react-bootstrap';
import CustomModal from '../common/CustomModal';
import {find, map} from 'lodash';

export default class BookService extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            carProfileId: undefined,
            notificationVisible: false,
            messageVisible: false,
            timelineUpdate: "otherDetails",
            myCarDropdownIcon: true,
            showModal: false,
            deleteModal: false,
            bookServiceModalVisible: false
        };
        this.deleteCarProfile = this.deleteCarProfile.bind(this);
        this.editCarProfile = this.editCarProfile.bind(this);
        this.switchCarProfile = this.switchCarProfile.bind(this);
        this.showBookServiceModal = this.showBookServiceModal.bind(this);
    }
    componentDidMount() {
      const routeParams = this.props.routeParams;
      if (routeParams.id){
        this.props.actions.getCarProfileDetails(routeParams.id);
      }
      const userId = localStorage.getItem('userId');
      const carProfileId = 'carProfiles-' + userId;
      let carProfiles = localStorage.getItem(carProfileId);
      if (!carProfiles) {
        this.props.actions.getCarProfileList(this.props.router);
      }
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.carProfileReducer.currentComponentKey) {
        this.props.router.push(nextProps.carProfileReducer.currentComponentKey);
      }
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }

    toggleMessage(isVisible) {
        this.setState({ 'messageVisible': isVisible });
    }

    timelineDetail(val) {
        this.setState({ timelineUpdate: val });
    }
    myCarDropdown() {
        this.setState({ myCarDropdownIcon: !this.state.myCarDropdownIcon,deleteModal:false });
    }
    carSelection(car) {
        this.setState({ selectedCar: car });
    }
    // modalVisiblity() {
    //     this.setState({ showModal: true });
    // }
    editCarProfile() {
      if (this.props.carProfileReducer.currentCarProfile && this.props.carProfileReducer.currentCarProfile.id) {
        this.props.router.push(`/car-profiles/${this.props.carProfileReducer.currentCarProfile.id}/edit`);
      }
    }
    deleteCarProfile() {
      if (this.props.carProfileReducer.currentCarProfile && this.props.carProfileReducer.currentCarProfile.id)
      this.props.actions.deleteCarProfile(this.props.carProfileReducer.currentCarProfile.id);
    }

    switchCarProfile(carProfileId) {
      if (carProfileId) {
        this.props.actions.getCarProfileDetails(carProfileId);
        this.props.router.push(`/car-profiles/${carProfileId}/view`);
      } else {
        this.props.router.push('/car-profiles/create');
      }
    }

    showBookServiceModal(e) {
      e.stopPropagation();
      e.preventDefault();
      this.setState({'bookServiceModalVisible': !this.state.bookServiceModalVisible})
    }

    render() {
      const { carProfileReducer, router } = this.props;
      const userId = localStorage.getItem('userId');
      const carProfileId = 'carProfiles-' + userId;
      let carProfiles = localStorage.getItem(carProfileId);
      const routeParams = this.props.routeParams;
      let currentCarProfile = undefined;
      const bookServiceOption = [
        {
            image: "../../images/book-service-1.png",
            title: "Car Wash",
            url:"/car-wash"
        }, {
            image: "../../images/book-service-2.png",
            title: "Car Service",
            url:"/car-service"
        }, {
            image: "../../images/book-service-3.png",
            title: "Car Repair",
            url:"/car-repair"
        }
      ];
      const bookServiceOptionView = map(bookServiceOption, (service, key) => {
          return (
              <li key={key} onClick={()=>router.push(service.url)}>
                  <Media>
                      <Media.Left>
                          <img width={69} height={69} src={service.image} alt="Image" />
                      </Media.Left>
                      <Media.Body>
                          <h5>{service.title}</h5>
                          <i className="mdi mdi-chevron-right" />
                      </Media.Body>
                  </Media>
              </li>
          );
      });
      if (carProfiles) {
        carProfiles = JSON.parse(carProfiles);
        if (routeParams.id){
          currentCarProfile = carProfiles[routeParams.id];
        }
      }
        return (
            <div>
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
                            <Button btnType="" btnSize="sm" customClass="timeline" fontSize={14} label="Book Service" btnCallBack={this.showBookServiceModal}/>
                            <div className="text-dropdown add-new car-profile-header" >
                                {carProfiles && currentCarProfile && 
                                <DropdownButton bsSize="large" id="dropdown-large" noCaret onSelect={this.switchCarProfile} onToggle={() => { this.myCarDropdown() }} title={
                                    <span>
                                        <h4>{currentCarProfile.name}</h4>
                                        {this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-down" />}
                                        {!this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-up" />}
                                    </span>} >
                                    {map(carProfiles, (carProfile, key) => {
                                      return (<MenuItem eventKey={carProfile.id} key={key}>{carProfile.name}</MenuItem >);
                                    })}
                                    <MenuItem eventKey="">Add New</MenuItem>
                                </DropdownButton>}
                            </div>

                            <div className="three-dots-icon">
                                <DropdownButton bsSize="xsmall"  id="dropdown-size-extra-small" title={<i className="mdi mdi-dots-vertical" />} noCaret pullRight>
                                    <MenuItem eventKey="Edit" onClick={this.editCarProfile}>Edit123</MenuItem>
                                    <MenuItem eventKey="Delete" onClick={() => {this.setState({ deleteModal: true })}}>Delete12333</MenuItem>
                                </DropdownButton>
                            </div>
                            <CustomModal showModal={this.state.deleteModal} title="Delete my audi a6" className="deleteCarProfile-modal" onHide={() => {this.setState({deleteModal: false})}} footer="true" 
                            
                            submitCallBack={this.deleteCarProfile}
                            saveText="Delete">
                                <Modal.Body>
                                    <p className="warning-text">Are you sure you want to delete this profile?</p>
                                </Modal.Body>
                            </CustomModal>
                            <CustomModal showModal={this.state.bookServiceModalVisible} title="book a service" className="bookService-modal" closeIcon="true" onHide={() => {this.setState({'bookServiceModalVisible': false})}}>
                              <Modal.Body>
                                  <ul>
                                      {bookServiceOptionView}
                                  </ul>
                              </Modal.Body>
                            </CustomModal>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <div className="row timeline-card">
                                <div className="col-md-3 pad0">
                                    {currentCarProfile && <ServiceDetails {...currentCarProfile}/>}
                                </div>
                                <div className="col-md-9 pad0">
                                    <div className="row timeline-summary-header">
                                        <div className="col-md-6 pad0">
                                            <div className={this.state.timelineUpdate == "otherDetails" ? "timeline-summary-tab active" : "timeline-summary-tab"} onClick={() => { this.timelineDetail('otherDetails'); }}>
                                                <span>OVERVIEW</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pad0">
                                            <div className={this.state.timelineUpdate == "timeline" ? "timeline-summary-tab active" : "timeline-summary-tab"} onClick={() => { this.timelineDetail('timeline'); }}>
                                                <span>TIMELINE</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row timeline-summary-body">
                                        <Scrollbars className="timelineScroll">
                                            {this.state.timelineUpdate == "otherDetails" && <div className="tab-otherDetails">
                                                {currentCarProfile && <OtherDetails {...currentCarProfile}/> }
                                            </div>}
                                            {this.state.timelineUpdate == "timeline" && <div className="tab-timeline ">
                                                <Timeline />
                                            </div>}
                                        </Scrollbars>
                                    </div>
                                </div>
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
