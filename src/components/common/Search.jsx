import React, { Component } from 'react';
import { FormGroup, InputGroup, Addon, FormControl } from 'react-bootstrap';
import Popup from "./Popup";
// import { findDOMNode } from 'react-dom';
import { DropdownButton, MenuItem, } from 'react-bootstrap';
import { map, filter, lowerCase } from "lodash";
import CustomModal from '../common/CustomModal';
import { Modal } from 'react-bootstrap';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: false,
            seachedValue: null,
            dropdownList: ["Audi", "Renault", "BMW", "Benz"],
            seachedResult: [],
            location: "",
            showLocationModal: false
        }
    }

    componentWillMount() {
        document.body.addEventListener('click', this.bodyClick.bind(this));
    }
    componetWillUnmount() {
        document.body.removeEventListener()
    }
    bodyClick(e) {
        debugger
        if ((e.target.closest('.searchFill') == null)) {
            this.setState({ seachedValue: "" })
        }
        if (e.target.className != "saveLocation") {
            this.setState({ showLocationModal: false })
        }
    }

    handleFocus() {
        this.setState({
            showResults: true
        });
    }
    handleblur() {
        this.setState({
            showResults: false
        });
    }
    seachedValue(e) {
        this.setState({ seachedValue: e })
    }
    dropdownSelect(e) {
        this.setState({ location: e })
    }
    saveLocation(e) {
        if (e.target.text == "Save") {
            this.setState({ showLocationModal: true })
        }
    }


    render() {

        let searchView = filter(this.state.dropdownList, (val) => {

            if (this.state.seachedValue != "" && val.toLowerCase().indexOf(this.state.seachedValue) != -1) {
                return val;
            }
        });
        return (
            <div className="searchBar">
                <div className="searchLeft">
                    <DropdownButton bsSize="large" id="dropdown-size-large" onSelect={(e) => { this.dropdownSelect(e) }} title={
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="mdi mdi-crosshairs-gps" /></span>
                            <input type="text" className="form-control padLeft0" placeholder="Locate Me" value={this.state.location} onChange={(e) => this.setState({ location: e.target.value })} aria-describedby="basic-addon1" />
                            <i className="mdi mdi-chevron-down" />
                        </div>}>
                        <MenuItem eventKey="1">
                            <label><i className="mdi mdi-crosshairs-gps" />
                                <span>Current Location</span>
                            </label>
                        </MenuItem>
                        <MenuItem eventKey="507 Dickens Fall Suite 422">
                            <label>
                                <i className="mdi mdi-home-variant" />
                                <span>Home</span>
                                <i className="mdi mdi-pencil pull-right" />
                            </label>
                            <span className="small-text">507 Dickens Fall Suite 422</span>
                        </MenuItem>
                        <MenuItem eventKey="507 Dickens Fall Suite">
                            <span>
                                <i className="mdi mdi-map-marker" />
                                <span>507 Dickens Fall Suite </span>

                            </span>
                            <span className="saveLocation" onClick={(e) => { this.saveLocation(e) }}><a>Save</a></span>
                        </MenuItem>
                        <MenuItem eventKey="507 Dickens Fall Suite">
                            <span>
                                <i className="mdi mdi-map-marker" />
                                <span>507 Dickens Fall Suite </span>
                                <i className="mdi mdi-arrow-top-left pull-right" />
                            </span>
                        </MenuItem>
                    </DropdownButton>

                </div>

                <div className="searchFill">
                    <FormGroup>
                        {/*<InputGroup>
                            <FormControl type="text" placeholder="Search" />
                            <InputGroup.Addon>
                                <i className="mdi mdi-magnify" />
                            </InputGroup.Addon>
                        </InputGroup>*/}
                        <DropdownButton bsSize="large" id="dropdown-size-large" onSelect={(e) => { this.seachedValue(e); }} open={searchView.length > 0 ? true : false} noCaret title={
                            <div >

                                <input value={this.state.seachedValue} placeholder="Search"
                                    onChange={(e) => this.setState({ seachedValue: e.target.value })} />
                                <i className="mdi mdi-magnify" aria-hidden="true" />
                                <span className="no-notify" />
                            </div>} >
                            {map(searchView, (result, key) => {
                                return (
                                    <MenuItem key={key} eventKey={result} >{result}</MenuItem>
                                );
                            })}

                        </DropdownButton>
                    </FormGroup>

                </div>
                <CustomModal showModal={this.state.showLocationModal} footer="true" title="save location">
                    <Modal.Body>
                        <div>
                            <h5 className="caption">Address</h5>
                            <span className="caption-result">{this.state.location}</span>
                        </div>
                        <div>
                            <h5 className="caption">location label</h5>
                            <input type="text" className="plain-input"/>
                        </div>
                    </Modal.Body>

                </CustomModal>
            </div>

        );
    }
}
