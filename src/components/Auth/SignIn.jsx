import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

export default class SignIn extends Component {
  render() {
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader headerTitle='Sign In'/>
        <CarouselSlider />
        <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
            <div className="login-panel signin">
                <div className="login-panel-header">
                    <h3 className="login-title">Sign In</h3>
                    <Button btnType="facebook" btnSize="lg" fontSize={16} label="Facebook"/>
                    <Button btnType="gmail" btnSize="lg" fontSize={16} label="Gmail"/>
                </div>
                <div className="or-text">
                    <span>OR</span>
                </div>
                <div className="login-panel-body">
                    <TextInput label="Name" errorMessage={'Enter your name'}/>
                    <TextInput label="Password" showPasswordImg={true}/>
                    <a href="" className="green-text">Forget Password ?</a>
                </div>
                <div className="login-panel-footer">
                    <Button btnType="submit" btnSize="sm" fontSize={16} label="Sign In"/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
