import React, { Component } from 'react';
import {Link} from 'react-scroll';

export default class BaseHeader extends Component {
    render() {
        return (
            <div className="vendor-base-header">
                <ul>
                    <li className="active">
                      <Link to="overview"> Overview</Link>
                    </li>
                    <li>
                      <Link to="services"> Services</Link>
                    </li>
                    <li>
                      <Link to="reviews"> Reviews</Link>
                    </li>
                    <li>
                      <Link to="offers"> Offers</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
