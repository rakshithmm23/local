import React, { Component } from 'react';
import {Link} from 'react-scroll';

export default class BaseHeader extends Component {
    render() {
        return (
            <div className="vendor-base-header">
                <ul>
                    <li className="active">
                      <Link to="overview" smooth={true} offset={-100}> Overview</Link>
                    </li>
                    <li>
                      <Link to="services" smooth={true} offset={-100}> <span>18</span> Services</Link>
                    </li>
                    <li>
                      <Link to="reviews" smooth={true} offset={-100}> <span>21</span> Reviews</Link>
                    </li>
                    <li>
                      <Link to="offers" smooth={true} offset={-100}> <span>2</span> Offers</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
