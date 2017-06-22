import React, { Component } from 'react';

export default class BaseHeader extends Component {
    render() {
        return (
            <div className="vendor-base-header">
                <ul>
                    <li className="active">
                        <a href="">Overview</a>
                    </li>
                    <li>
                        <a href="">18 Services</a>
                    </li>
                    <li>
                        <a href="">21 Reviews</a>
                    </li>
                    <li>
                        <a href="">2 Offers</a>
                    </li>
                </ul>
            </div>
        );
    }
}
