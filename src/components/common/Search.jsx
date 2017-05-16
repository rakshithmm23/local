import React, { Component } from 'react';
import { FormGroup, InputGroup, Addon, FormControl } from 'react-bootstrap';


export default class Search extends Component {
    render() {
        return (
                <div className="searchBar">
                   <div className="searchLeft">
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <i className="mdi mdi-crosshairs-gps" />
                                </InputGroup.Addon>
                                <FormControl type="text" placeholder="Location"/>
                                <InputGroup.Addon>
                                    <i className="mdi mdi-menu-down" />
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <div className="locationSuggestion hide">
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
                   </div>
                   <div className="searchFill">
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" placeholder="Search"/>
                                <InputGroup.Addon>
                                    <i className="mdi mdi-magnify" />
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                   </div>
                </div>
        );
    }
}
