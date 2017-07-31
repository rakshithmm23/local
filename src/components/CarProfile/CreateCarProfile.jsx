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
            isEditPage: false
        };
    }
    componentWillMount() {
      const routeParams = this.props.routeParams;
      if (routeParams && routeParams.id) {
        this.setState({'isEditPage': true});
        this.props.actions.getCarProfileDetails(routeParams.id);
      }
    }
    componentWillUnmount() {
      this.props.actions.hideErrorMessage();
    }
    componentWillReceiveProps(nextProps) {
			if(nextProps.carProfileReducer.currentComponentKey === 'car-list')
      	this.props.router.push('car-profiles');
    }

    onSubmit(carProfileData){
      this.props.actions.setCarProfileAction(carProfileData);
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
                            <h4>Create A Car Profile</h4>
                        </div>
                    </div>

                    <div className="inSection">
                        <div className="padwrapper">
                            {authReducer && authReducer.showErrorMessage && <AlertDismissable bsStyle="danger" closeLabel="Close alert" closeAction={this.props.actions.hideErrorMessage}>
                              <p> <i className="mdi mdi-block-helper" /> {authReducer.statusMessage} </p>
                            </AlertDismissable>}
                            {/*Job Updates*/}
                            <ProfileSteps {...this.props} onSubmit={this.onSubmit.bind(this)} />
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
