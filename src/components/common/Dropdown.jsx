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
                onToggle={()=>{this.setState({'dropDownVisible': !this.state.dropDownVisible})}}
                title={
                    <span>
                        <img src="./src/images/pic.png" alt="" />
                        <span className="profileName"> John Doe </span>
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
                <MenuItem eventKey="4" className="active">
                    <i className="mdi mdi-power" /> Sign Out
                </MenuItem>
            </DropdownButton>
        );
    }
}
