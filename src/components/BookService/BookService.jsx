import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import Button from '../common/Button';
import BookServiceBox from './BookServiceBox';
import { concat, map } from 'lodash';

export default class BookService extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            messageVisible: false,
            isLoading: false
        };
    }
    componentWillMount() {
      this.setState({'isLoading': true});
      this.props.actions.getCarProfileList(this.props.router);
    }
    componenWillReceiveProps(nextProps) {
      if (nextProps.carProfileReducer.isLoaded) {
        this.setState({'isLoading': false});
      }
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }
    toggleMessage(isVisible) {
        this.setState({ 'messageVisible': isVisible });
    }

    render() {
        const {router, carProfileReducer} = this.props;
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
                            <h4>My Cars</h4>
                            <Button btnType="" btnSize="sm" fontSize={13} label="Add New Car"  btnCallBack={() => {router.push('/car-profiles/create')}}/>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <div className="myCar-list">
                                <div className="myCar-body row">
                                    {/*Job Updates*/}
                                    {carProfileReducer.carProfiles && map(carProfileReducer.carProfiles, (profile, index) => {
                                      return (
                                          <BookServiceBox key={index} {...profile}
                                            router={router}
                                      />);
                                    })}
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
