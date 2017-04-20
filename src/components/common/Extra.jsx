import React, {Component} from 'react';
import '../../styles/extra.css';

export default class Header extends Component {
  render() {
    const {bgColor, message} = this.props;
    return (
        <div className="notification-message" style={{backgroundColor: bgColor ? bgColor : '#006FB9'}}>
            <div className="notification-desc">
                <p>{message}</p>
                <i className="mdi mdi-close" aria-hidden="true"/>
            </div>
        </div>
    );
  }
}
