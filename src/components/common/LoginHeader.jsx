import React, { Component } from 'react';

export default class LoginHeader extends Component {

    render() {
        const {headerTitle} = this.props;
        return (
            <div className="login-title mobile">
                <a href="index.html">
                    <img src="../images/back-arrow.png" alt="back" />
                </a>
                {headerTitle}
            </div>
        );
    }
}
