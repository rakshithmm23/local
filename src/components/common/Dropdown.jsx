import React, { Component } from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap'

export default class Dropdown extends Component {

    render() {
        return (
            <DropdownButton title="Sathish Kumar">
                <MenuItem eventKey="1">My Account</MenuItem>
                <MenuItem eventKey="2">Settings</MenuItem>
                <MenuItem eventKey="3">Logout</MenuItem>
            </DropdownButton>
        );
    }
}
