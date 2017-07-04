import React, { Component } from 'react';
import { map, filter } from "lodash";

export default class MobileSearch extends Component {
    constructor() {
        super();
        this.state = {
            seachedValue: "",
        };
    }

    render() {
        const { callBackBtn } = this.props;
        let searchView = filter(this.props.dropdownList, (val) => {
            if (this.state.seachedValue != "" && val.toLowerCase().indexOf(this.state.seachedValue) != -1) {
                return val;
            }
        });

        return (
            <div>
                <div className='mobileSearch'>
                    <div className="notificationHead">
                        <div className="back-option" onClick={callBackBtn}>
                            <img src="../../images/back-arrow.png" />
                        </div>
                        <div className="search-input">
                            <div className="input-group"><span className="input-group-addon" id="basic-addon1"><i className="mdi mdi-crosshairs-gps"></i></span>
                                <input type="text" className="form-control" placeholder="Search" value={this.state.seachedValue}
                                    onChange={(e) => this.setState({ seachedValue: e.target.value })} />
                                <i className="mdi mdi-magnify"></i>
                            </div>
                        </div>

                    </div>
                    <ul className="notificationList">
                        {map(searchView, (searchRes, key) => {

                                let resLower = searchRes.toLocaleLowerCase()
                                let index = resLower.indexOf(this.state.seachedValue);
                                if (index >= 0) {
                                    resLower = <span>
                                        <span >{resLower.substring(0, index)}</span>
                                        <span >{resLower.substring(index, index + this.state.seachedValue.length)}</span>
                                        <span >{resLower.substring(index + this.state.seachedValue.length)}</span>
                                    </span>;
                                }

                                return (
                                    <li key={key} eventKey={searchRes} >{resLower}</li>
                                );
                            })}
                        {/*<li>
                            <label className="my-location">
                                <i className="mdi mdi-crosshairs-gps"></i>
                                <span>Current Location</span>
                            </label>
                        </li>
                        <li className="">
                            <label>
                                <i className="mdi mdi-home-variant"></i>
                                <span>home</span>
                            </label>
                            <div>
                                <span className="small-text">Kr market</span>
                                <span className="editLocation " ><a>Edit</a></span>
                            </div>
                        </li>
                        <li className="">
                            <div>
                                <i className="mdi mdi-map-marker"></i>
                                <span className="small-text">Kr market</span>
                                <span className="editLocation " ><a>Edit</a></span>
                            </div>
                        </li>*/}

                    </ul>
                </div>
            </div>
        );
    }
}
