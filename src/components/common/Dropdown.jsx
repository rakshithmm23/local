import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownVisible: false
        }
    }
    render() {
        return (
            <DropdownButton
                id={this.props.id ? this.props.id : 0}
                onToggle={()=>{this.setState({'dropDownVisible': !this.state.dropDownVisible});}}
                title={
                    <span>
                        <img src="../../images/pic.png" alt="" />
                        {this.state.dropDownVisible && <i className="mdi mdi-chevron-up" />}
                        {!this.state.dropDownVisible && <i className="mdi mdi-chevron-down" />}
                    </span>
                }
            >
                <MenuItem eventKey="1">
                    <i className="mdi mdi-account" /> My Account
                </MenuItem>
                <MenuItem eventKey="2">
                    <i className="mdi mdi-seal" /> Rewards
                </MenuItem>
                <MenuItem eventKey="3">
                    <i className="mdi mdi-settings" /> Settings
                </MenuItem>
                <MenuItem onClick={() => {this.props.authActions.logout(this.props.router)}} eventKey="4" className="active">
                    <i className="mdi mdi-power" /> Sign Out
                </MenuItem>
            </DropdownButton>
        );
    }
}
