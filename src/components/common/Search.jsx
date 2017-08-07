import React, { Component } from 'react';
import { FormGroup, InputGroup, Addon, FormControl, Modal } from 'react-bootstrap';
import { DropdownButton, MenuItem, } from 'react-bootstrap';
import { map, filter, merge, forEach } from "lodash";
import CustomModal from '../common/CustomModal';
import Gmaps from '../MyRequest/Gmaps';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setCenter: false,
            mapLocationChanged: false,
            showLocationModal: false,
            locationSearch: [{
                lat: 0,
                lng: 0,
                pinImage: ''
            }],
            showResults: false,
            seachedValue: "",

            seachedResult: [],
            location: "",
            addLocationModal: false,
            editLocationModal: false,
            pinImage: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyOHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyOCA0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5Mb2NhdGlvbiBwaW48L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJNYXJrLUxvY2F0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY4LjAwMDAwMCwgLTUzMi4wMDAwMDApIiBmaWxsPSIjRUQzMTI0Ij4gICAgICAgICAgICA8cGF0aCBkPSJNNjgyLDU1MC45Njg3NSBDNjgzLjQzNzUwNyw1NTAuOTY4NzUgNjg0LjYyNDk5NSw1NTAuNTAwMDA1IDY4NS41NjI1LDU0OS41NjI1IEM2ODYuNTAwMDA1LDU0OC42MjQ5OTUgNjg2Ljk2ODc1LDU0Ny40Mzc1MDcgNjg2Ljk2ODc1LDU0NiBDNjg2Ljk2ODc1LDU0NC41NjI0OTMgNjg2LjUwMDAwNSw1NDMuMzc1MDA1IDY4NS41NjI1LDU0Mi40Mzc1IEM2ODQuNjI0OTk1LDU0MS40OTk5OTUgNjgzLjQzNzUwNyw1NDEuMDMxMjUgNjgyLDU0MS4wMzEyNSBDNjgwLjU2MjQ5Myw1NDEuMDMxMjUgNjc5LjM3NTAwNSw1NDEuNDk5OTk1IDY3OC40Mzc1LDU0Mi40Mzc1IEM2NzcuNDk5OTk1LDU0My4zNzUwMDUgNjc3LjAzMTI1LDU0NC41NjI0OTMgNjc3LjAzMTI1LDU0NiBDNjc3LjAzMTI1LDU0Ny40Mzc1MDcgNjc3LjQ5OTk5NSw1NDguNjI0OTk1IDY3OC40Mzc1LDU0OS41NjI1IEM2NzkuMzc1MDA1LDU1MC41MDAwMDUgNjgwLjU2MjQ5Myw1NTAuOTY4NzUgNjgyLDU1MC45Njg3NSBaIE02ODIsNTMyLjAzMTI1IEM2ODYuMDAwMDIsNTMyLjA5Mzc1IDY4OS4zMTI0ODcsNTMzLjQzNzQ4NyA2OTEuOTM3NSw1MzYuMDYyNSBDNjk0LjU2MjUxMyw1MzguNjg3NTEzIDY5NS45MDYyNSw1NDEuOTk5OTggNjk1Ljk2ODc1LDU0NiBDNjk1LjQwNjI0Nyw1NTEuNjg3NTI4IDY5My4wNzgxNDUsNTU3LjMyODA5NyA2ODguOTg0Mzc1LDU2Mi45MjE4NzUgQzY4NC44OTA2MDUsNTY4LjUxNTY1MyA2ODIuNTYyNTAzLDU3MS41MzEyNDggNjgyLDU3MS45Njg3NSBDNjgxLjQzNzQ5Nyw1NzEuNTMxMjQ4IDY3OS4xMDkzOTUsNTY4LjUxNTY1MyA2NzUuMDE1NjI1LDU2Mi45MjE4NzUgQzY3MC45MjE4NTUsNTU3LjMyODA5NyA2NjguNTkzNzUzLDU1MS42ODc1MjggNjY4LjAzMTI1LDU0NiBDNjY4LjA5Mzc1LDU0MS45OTk5OCA2NjkuNDM3NDg3LDUzOC42ODc1MTMgNjcyLjA2MjUsNTM2LjA2MjUgQzY3NC42ODc1MTMsNTMzLjQzNzQ4NyA2NzcuOTk5OTgsNTMyLjA5Mzc1IDY4Miw1MzIuMDMxMjUgWiIgaWQ9IkxvY2F0aW9uLXBpbiI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+'

        }
    }

    componentWillMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        document.body.addEventListener('mousedown', this.bodyClick.bind(this));
    }
    showPosition(position) {
        let positionVal = [{
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            pinImage: this.state.pinImage
        }]
        this.setState({ locationSearch: positionVal })

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
        if (e.target.parentNode.className != "my-location") {
            this.setState({ showLocationModal: false });
        }
        if (e.target.className != "current-position" || e.target.className != "mdi mdi-crosshairs-gps") {
            this.setState({ setCenter: false });
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
        } else if (e.target.text == "Edit") {
            this.setState({ editLocationModal: true })
        }
    }


    render() {
        const style = {
            textBold: {
                fontFamily: "CenturyGothic_bold",
                display: "inline",
                textTransform: "lowercase",
                fontSize: "13px"
            }, textNormal: {
                display: "inline",
                textTransform: "lowercase",
                fontSize: "13px"
            }
        }
        const jobCardLocation = forEach(this.state.locationSearch, (loc) => {
            return {
                lat: loc.latitude, lng: loc.longitude, pinImage: loc.pinImage
            }
        })
        let searchView = filter(this.props.dropdownList, (val) => {
            if (this.state.seachedValue != "" && val.toLowerCase().indexOf(this.state.seachedValue) != -1) {
                return val;
            }
        });

        let locationFilterView = filter(this.props.savedLocation, (val) => {
            if (this.state.location != "" && val.address.toLowerCase().indexOf(this.state.location) != -1) {

                return val;
            }
            if (this.state.location == "") {
                return val;
            }
        });

        const savedLocationView = map(locationFilterView, (location, key) => {
            return (
                <MenuItem eventKey={location.address} key={key}>
                    <span>
                        {location.name ?
                            <div>
                                <label>
                                    <i className="mdi mdi-home-variant" />
                                    <span>{location.name}</span>

                                </label>
                                <span>
                                    <span className="small-text">{location.address}</span>
                                    {/*<i className="mdi mdi-pencil pull-right editLocation" onClick={(e) => { this.saveLocation(e) }} />*/}
                                    <span className="editLocation inline-disp" onClick={(e) => { this.saveLocation(e) }}><a>Edit</a></span>
                                </span>

                            </div> :
                            <div>
                                <span className="inline-disp">
                                    <i className="mdi mdi-map-marker" />
                                    <span className="inline-disp">{location.address}</span>
                                </span>
                                <span className="saveLocation inline-disp" onClick={(e) => { this.saveLocation(e) }}><a>Save</a></span>
                            </div>}
                    </span>
                </MenuItem>
            )
        })

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
                            <label className="my-location" onClick={() => { this.setState({ showLocationModal: true }) }}><i className="mdi mdi-crosshairs-gps" />
                                <span >Current Location</span>
                            </label>
                        </MenuItem>
                        {savedLocationView}
                    </DropdownButton>

                </div>

                <div className={searchView.length > 0 ? "searchFill active" : "searchFill"}>
                    <FormGroup>
                        <DropdownButton bsSize="large" id="dropdown-size-large" onSelect={(e) => { this.seachedValue(e); }}
                            open={searchView.length > 0 ? true : false}
                            noCaret title={
                            <div>
                                <input value={this.state.seachedValue} placeholder="Search"
                                    onChange={(e) => this.setState({ seachedValue: e.target.value })} />
                                <i className="mdi mdi-magnify" aria-hidden="true" />
                                <span className="no-notify" />
                            </div>}>
                            {map(searchView, (searchRes, key) => {

                                let resLower = searchRes.toLocaleLowerCase()
                                let index = resLower.indexOf(this.state.seachedValue);
                                if (index >= 0) {
                                    resLower = <span>
                                        <span style={style.textNormal}>{resLower.substring(0, index)}</span>
                                        <span style={style.textBold}>{resLower.substring(index, index + this.state.seachedValue.length)}</span>
                                        <span style={style.textNormal}>{resLower.substring(index + this.state.seachedValue.length)}</span>
                                    </span>;
                                }

                                return (
                                    <MenuItem key={key} eventKey={searchRes} >{resLower}</MenuItem>
                                );
                            })}
                        </DropdownButton>
                    </FormGroup>

                </div>
                <CustomModal onHide={() => {this.setState({addLocationModal: false})}} showModal={this.state.addLocationModal} footer="true" title="save location">
                    <Modal.Body>
                        <div>
                            <h5 className="caption">Address</h5>
                            <span className="caption-result">{this.state.location}</span>
                        </div>
                        <div>
                            <h5 className="caption">Location Label</h5>
                            <input type="text" className="plain-input" />
                        </div>
                    </Modal.Body>
                </CustomModal>
                <CustomModal onHide={() => {this.setState({editLocationModal: false})}} showModal={this.state.editLocationModal} footer="true" title="edit location">
                    <Modal.Body>
                        <div>
                            <h5 className="caption">Address</h5>
                            <span className="caption-result">{this.state.location}</span>
                        </div>
                        <div>
                            <h5 className="caption">Location Label</h5>
                            <div className="row">
                                <div className="col-md-10 col-xs-10 pad0">
                                    <input type="text" className="plain-input" />
                                </div>
                                <div className="col-md-2 col-xs-2">
                                    <span className="delete-text">Delete</span>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </CustomModal>
                <CustomModal onHide={() => {this.setState({showLocationModal: false})}} className="map-modal" showModal={this.state.showLocationModal} footer="true" title="Mark your location" saveText="Select Location">
                    <Modal.Body>
                        <span onClick={() => this.setState({ setCenter: true })} className="current-position"><i className="mdi mdi-crosshairs-gps"></i></span>
                        <Gmaps
                            setCenter={this.state.setCenter}
                            center={{ lat: this.state.locationSearch[0].lat, lng: this.state.locationSearch[0].lng }}
                            markers={jobCardLocation}
                            zoom={9}
                            containerElement={<div style={{ height: 562 + 'px', width: 'auto' }} className="locationPopup" />}
                            mapElement={<div style={{ height: 562 + 'px', width: 'auto' }} className="locationPopup" />}
                        />
                    </Modal.Body>
                </CustomModal>
            </div>
        );
    }
}
