import React, { Component } from 'react';
import { FormGroup, InputGroup, Addon, FormControl } from 'react-bootstrap';
import Popup from "./Popup";
// import { findDOMNode } from 'react-dom';
import { DropdownButton, MenuItem, } from 'react-bootstrap';
import { map, filter, lowerCase } from "lodash";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: false,
            seachedValue: null,
            dropdownList: ["Audi", "Renault", "BMW", "Benz"],
            seachedResult: []
        }
    }

    componentWillMount() {
        document.body.addEventListener('click', this.bodyClick.bind(this));
    }
    bodyClick(e) {
        if ((e.target.closest('.searchFill') == null)) {
            this.setState({ seachedValue: "" })
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


    render() {

        let searchView = filter(this.state.dropdownList, (val) => {

            if (this.state.seachedValue != "" && val.toLowerCase().indexOf(this.state.seachedValue) != -1) {
                return val
            }
        })
        return (
            <div className="searchBar">
                <div className="searchLeft">
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="mdi mdi-crosshairs-gps" />
                            </InputGroup.Addon>
                            <FormControl type="text" placeholder="Location" ref={(inputRef) => { this.locationPopup = inputRef; }} onFocus={this.handleFocus.bind(this)} onBlur={this.handleblur.bind(this)} />
                            <InputGroup.Addon>
                                <i className="mdi mdi-chevron-down" />
                            </InputGroup.Addon>
                        </InputGroup>

                        <Popup open={this.state.showResults}>
                            <div className="locationSuggestion">
                                <ul>
                                    <li>
                                        <label>
                                            <i className="mdi mdi-crosshairs-gps" />  Current Location
                                            </label>
                                    </li>
                                    <li>
                                        <label>
                                            <i className="mdi mdi-home-variant" />
                                            <span>Home</span>
                                            <i className="mdi mdi-pencil pull-right" />
                                        </label>
                                        <span className="small-text">
                                            507 Dickens Fall Suite 422
                                            </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="mdi mdi-map-marker" />
                                            <span>507 Dickens Fall Suite </span>
                                        </span>
                                        <a href="">Save</a>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="mdi mdi-map-marker" />
                                            <span>507 Dickens Fall Suite </span>
                                            <i className="mdi mdi-arrow-top-left pull-right" />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Popup>
                    </FormGroup>
                </div>
                <div className="searchFill">
                    <FormGroup>
                        {/*<InputGroup>
                            <FormControl type="text" placeholder="Search" />
                            <InputGroup.Addon>
                                <i className="mdi mdi-magnify" />
                            </InputGroup.Addon>
                        </InputGroup>*/}
                        <DropdownButton bsSize="large" id="dropdown-size-large" onSelect={(e) => { this.seachedValue(e) }} open={searchView.length > 0 ? true : false} noCaret title={
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
            </div>
        );
    }
}
