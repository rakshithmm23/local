import React, { Component } from 'react';
import { FormGroup, InputGroup, Addon, FormControl, Modal } from 'react-bootstrap';
import { DropdownButton, MenuItem, } from 'react-bootstrap';
import { map, filter, merge } from "lodash";
import CustomModal from '../common/CustomModal';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: false,
            seachedValue: null,
            dropdownList: ["Audi", "Renault", "BMW", "Benz"],
            seachedResult: [],
            location: "",
            addLocationModal: false,
            editLocationModal: false
        }
    }

    componentWillMount() {
        document.body.addEventListener('click', this.bodyClick.bind(this));
    }
    componetWillUnmount() {
        document.body.removeEventListener()
    }
    bodyClick(e) {
        if ((e.target.closest('.searchFill') == null)) {
            this.setState({ seachedValue: "" });
        }
        if (e.target.className != "saveLocation") {
            this.setState({ addLocationModal: false });
        }
        if (e.target.className != "editLocation") {
            this.setState({ editLocationModal: false });
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
            this.setState({ addLocationModal: true })
        } else if (e.target.classList.contains('editLocation')) {
            this.setState({ editLocationModal: true })
        }
    }

    render() {

        let searchView = filter(this.state.dropdownList, (val) => {
            if (this.state.seachedValue != "" && val.toLowerCase().indexOf(this.state.seachedValue) != -1) {
                return val;
            }
        });
        const savedLocation = [
            {
                address: "507 Dickens Fall Suite",
                name: "home"
            },
            {
                address: "551, Mg Road",
                name: "work"
            }, {
                address: "sp road"
            }
        ]

        let locationFilterView = filter(savedLocation, (val) => {
            if (this.state.location != "" && val.address.toLowerCase().indexOf(this.state.location) != -1) {
                return val.address;
            }
        });

        const savedLocationView = map(locationFilterView, (location, index) => {
            return (
                <MenuItem eventKey={location.address} index={index}>
                    <span>
                        {location.name ?
                            <div>
                                {/*<i className="mdi mdi-home-variant" />
                            <span>{location.name}</span>
                            <span>{location.address}</span>
                            <i className="mdi mdi-pencil pull-right editLocation" onClick={(e) => { this.saveLocation(e) }} />*/}
                                <label>
                                    <i className="mdi mdi-home-variant" />
                                    <span>{location.name}</span>
                                    <i className="mdi mdi-pencil pull-right editLocation" onClick={(e) => { this.saveLocation(e) }} />
                                </label>
                                <span className="small-text">{location.address}</span>
                            </div> :
                            <div>
                                

                                <span>
                                    <i className="mdi mdi-map-marker" />
                                    <span>{location.address}</span>
                                </span>
                                <span className="saveLocation" onClick={(e) => { this.saveLocation(e) }}><a>Save</a></span>                            
                                </div>}
                    </span>
                </MenuItem>
            )
        })
        // const recentLocationView = map(recentLocation, (location, index) => {
        //     return (
        //         <MenuItem eventKey={location.address} index={index}>
        //             <span>
        //                 <i className="mdi mdi-map-marker" />
        //                 <span>{location.address} </span>
        //             </span>
        //             <span className="saveLocation" onClick={(e) => { this.saveLocation(e)}}><a>Save</a></span>
        //         </MenuItem>
        //     )
        // })
        return (
            <div className="searchBar">
                <div className="searchLeft">
                    <DropdownButton bsSize="large" id="dropdown-size-large" onSelect={(e) => { this.dropdownSelect(e) }} title={
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"><i className="mdi mdi-crosshairs-gps" /></span>
                            <input type="text" className="form-control padLeft0" placeholder="Locate Me" value={this.state.location} onChange={(e) => this.setState({ location: e.target.value })} aria-describedby="basic-addon1" />
                            <i className="mdi mdi-chevron-down" />
                        </div>}>
                        <MenuItem eventKey="">
                            <label><i className="mdi mdi-crosshairs-gps" />
                                <span>Current Location</span>
                            </label>
                        </MenuItem>

                        {/*
                        <MenuItem eventKey="507 Dickens Fall Suite">
                            <span>
                                <i className="mdi mdi-map-marker" />
                                <span>507 Dickens Fall Suite </span>
                                <i className="mdi mdi-arrow-top-left pull-right" />
                            </span>
                        </MenuItem>*/}
                        {savedLocationView}
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
                <CustomModal showModal={this.state.addLocationModal} footer="true" title="save location">
                    <Modal.Body>
                        <div>
                            <h5 className="caption">Address</h5>
                            <span className="caption-result">{this.state.location}</span>
                        </div>
                        <div>
                            <h5 className="caption">location label</h5>
                            <input type="text" className="plain-input" />
                        </div>
                    </Modal.Body>
                </CustomModal>
                <CustomModal showModal={this.state.editLocationModal} footer="true" title="save location">
                    <Modal.Body>
                        <div>
                            <h5 className="caption">Address</h5>
                            <span className="caption-result">{this.state.location}</span>
                        </div>
                        <div>
                            <h5 className="caption">location label</h5>
                            <div className="row">
                                <div className="col-md-10 pad0">
                                    <input type="text" className="plain-input" />
                                </div>
                                <div className="col-md-2">
                                    <span className="delete-text">Delete</span>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </CustomModal>
            </div>

        );
    }
}
