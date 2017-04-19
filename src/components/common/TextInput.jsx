import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      passwordVisible: false
    }
  }

  render() {
    const {label, showError, isOTP, errorMessage, showPasswordImg, isNumber} = this.props;
    let inputClass = 'form-group ';
    if (showError) {
      inputClass += 'error ';
    }
    if (isOTP) {
      inputClass += 'otp-input ';
    }
    return showPasswordImg ?
    (
      <div className={inputClass}>
          <input type={this.state.passwordVisible ? 'text' : 'password'} className="form-control form-input" required/>
          {showPasswordImg && <span className="input-icon" onClick={(e) => {e.preventDefault(); this.setState({'passwordVisible': !this.state.passwordVisible})}}>
            <img src="../images/eye.png" alt="" />
          </span>}
          {showError && errorMessage && <span className="error-text">{errorMessage}</span>}
          <label>{label}</label>
      </div>
    ) :
    (
      <div className={inputClass}>
          <input type={isNumber ? 'number' : 'text'} className="form-control form-input" required/>
          {showError && errorMessage && <span className="error-text">{errorMessage}</span>}
          <label>{label}</label>
      </div>
    );
  }
}
