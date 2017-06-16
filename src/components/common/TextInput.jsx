import React, { Component } from 'react';
import {testSpaces, validateEmail, validatePassword, validateMobile} from '../../helpers/'
export default class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      'passwordVisible': false,
      'showValidationError': false
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.showValidationError) {
      this.setState({showValidationError: nextProps.showValidationError})
    }
  }
  handleInputChange(e) {
    const inputValue = e.target.value;
    const {type, onChange, name, limitCharacters} = this.props;
    if ((type == "email" && !validateEmail(inputValue)) || (type == "password" && !validatePassword(inputValue)) || (type == "mobile" && !validateMobile(inputValue))) {
      return;
    } else {
      this.setState({showValidationError: false});
    }
    if (onChange) {
      if(limitCharacters && inputValue.length>limitCharacters){
        return;
      } else{
        onChange(inputValue, undefined, name);
      }
    }
  }
  handleOnBlur(e) {
    const inputValue = e.target.value;
    const {type, name} = this.props;
    if (!testSpaces(inputValue)) {
        this.setState({showValidationError: true});
    } else {
        if ((type == "email" && !validateEmail(inputValue)) || (type == "password" && !validatePassword(inputValue)) || (type == "phone" && !validateMobile(inputValue))) {
            this.setState({showValidationError: true});
        } else {
          this.setState({showValidationError: false});
        }
      }
  }
  render() {
    const {label, isOTP, validationError, isNumber, type} = this.props;
    let inputClass = 'form-group ';
    if (this.state.showValidationError) {
      inputClass += 'error ';
    }
    if (isOTP) {
      inputClass += 'otp-input ';
    }
    return type === "password" ?
    (
      <div className={inputClass}>
          <input
            type={type == "password" ? this.state.passwordVisible ? "text" : "password" : type}
            className="form-control form-input"
            onBlur={this
              .handleOnBlur
              .bind(this)
            }
            onChange={(e) => this.handleInputChange(e, type)}
            required/>
          {type === "password" && <span className="input-icon" onClick={(e) => {e.preventDefault(); this.setState({'passwordVisible': !this.state.passwordVisible})}}>
            {this.state.passwordVisible ? <img src="../../images/eye-active.png" alt="" /> : <img src="../../images/eye.png" alt="" /> }
          </span>}
          {this.state.showValidationError && validationError && <span className="error-text">{validationError}</span>}
          <label>{label}</label>
      </div>
    ) :
    (
      <div className={inputClass}>
          <input
            type={type == 'email' ? 'text': type == 'mobile' ? 'number' : 'text'}
            className="form-control form-input"
            onBlur={this
              .handleOnBlur
              .bind(this)
            }
            onChange={(e) => this.handleInputChange(e, type)}
            required/>
          {this.state.showValidationError && validationError && <span className="error-text">{validationError}</span>}
          <label>{label}</label>
      </div>
    );
  }
}
