import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import ProfileSteps from './ProfileSteps';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import AlertDismissable from '../common/AlertDismissable';

export default class NewCarProfile extends Component {
    constructor(props) {
        super(props);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            messageVisible: false,
            isEditProfile: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillMount() {
      const routeParams = this.props.routeParams;
      this.props.actions.getCarMakeandModels();
      if (routeParams && routeParams.id) {
        this.setState({'isEditProfile': true, profileId: routeParams.id});
        this.props.actions.getCarProfileDetails(routeParams.id);
      }
    }
    componentWillUnmount() {
      this.props.actions.hideErrorMessage();
    }
    componentWillReceiveProps(nextProps) {
			if(nextProps.carProfileReducer.currentComponentKey === 'car-list') {
      	this.props.router.push('/car-profiles');
      }
    }

    onSubmit(carProfileData, isEditProfile){
      this.props.actions.setCarProfileAction(carProfileData, isEditProfile, this.state.profileId);
    }

    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }

    toggleMessage(isVisible) {
        this.setState({ 'messageVisible': isVisible });
    }

    render() {
      const {authReducer, carProfileReducer} = this.props;
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
                            <h4>{this.state.isEditProfile ? 'Edit Car Profile' : 'Create A Car Profile'}</h4>
                        </div>
                    </div>

                    <div className="inSection">
                        <div className="padwrapper">
                            {authReducer && authReducer.showErrorMessage && <AlertDismissable bsStyle="danger" closeLabel="Close alert" closeAction={this.props.actions.hideErrorMessage}>
                              <p> <i className="mdi mdi-block-helper" /> {authReducer.statusMessage} </p>
                            </AlertDismissable>}
                            {/*Job Updates*/}
                            <ProfileSteps {...this.props} onSubmit={this.onSubmit} isEditProfile={this.state.isEditProfile} profileData={carProfileReducer && carProfileReducer.currentCarProfile ? carProfileReducer.currentCarProfile : undefined }/>
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
