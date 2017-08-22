import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import AlertDismissable from '../common/AlertDismissable';
import CustomScroll from 'react-custom-scroll';

export default class EmailVerified extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Verifying email ...',
            caption: ''
        }
    }
    componentWillMount() {
        const currentRoute = this.props.router.getCurrentLocation();
        if (currentRoute.query && currentRoute.query.type && currentRoute.query.code) {
            this.props.actions.verifyEmail(currentRoute.query.code);
        } else {
            this.props.router.push('/');
        }
    }
    render() {
        const { authReducer } = this.props;
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle="Sign Up" />
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                    <div className="customScroll">
                        <CustomScroll heightRelativeToParent="calc(100%)" allowOuterScroll={true}>
                            <div className="login-panel confirmed-reset-panel">
                                <div className="login-panel-header forget-panel-header">
                                    {authReducer && authReducer.showErrorMessage && <AlertDismissable bsStyle="danger" closeLabel="Close alert" closeAction={this.props.actions.hideErrorMessage}>
                                        <p> <i className="mdi mdi-block-helper" /> {authReducer.statusMessage} </p>
                                    </AlertDismissable>}
                                    {!(authReducer && authReducer.showErrorMessage) && <h3 className="login-title">{authReducer.emailVerified ? 'Verification Success' : this.state.title}</h3>}
                                    {!(authReducer && authReducer.showErrorMessage) && <p className="note-text">
                                        {authReducer && authReducer.emailVerified ? 'Email has been successfully verified.' : this.state.caption}
                                    </p>}
                                </div>
                                <div className="login-panel-footer confirmed-reset">
                                    <Button btnType="gmail" btnSize="sm" fontSize={14} label="Login" btnCallBack={(e) => { e.preventDefault(); this.props.router.push('/sign-in') }} />
                                </div>
                            </div>
                        </CustomScroll>
                    </div>
                </div>
            </div>
        );
    }
}
