import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class SelectDropdown extends Component {
    constructor() {
        super()
        this.state = {
            carProfile: 'audi',
            carProfileDd: false

        }
    }
    render() {
        return (
            <div>
                <DropdownButton onSelect={(e) => this.setState({ carProfile: e })} className="car-profile-dd" onToggle={(e) => this.setState({ carProfileDd: e })} open={this.state.carProfileDd}
                    bsSize="xsmall" title={this.state.carProfile} id="dropdown-size-extra-small" noCaret>
                    <MenuItem eventKey="My Audi">My Audi</MenuItem>
                    <MenuItem eventKey="My Nissan GT-R">My Nissan GT-R</MenuItem>
                    <MenuItem eventKey="My BMW">My BMW</MenuItem>
                </DropdownButton>
                <i className={this.state.carProfileDd ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"}></i>

            </div>
        );
    }
}

export default SelectDropdown;