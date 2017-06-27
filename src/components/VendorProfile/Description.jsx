import React, { Component } from 'react';

export default class Description extends Component {
    render() {
        return (
            <div>
                <div className="vendor-description">
                    <h4>Description</h4>
                    <p>
                        Lorem ipsum dolor sit amet, augue admodum suscipiantur per ei, partem nostrud denique usu ea.
                    Clita possim civibus at per. Cum id accumsan epicurei torquatos,
                    nostro dolores et ius, hinc noster duo ad. Sonet congue nec in, sed eu elit viderer corpora.
                </p>
                </div>
                <div className="row vendor-description">
                    <h4>Facilities</h4>
                    <ul className="vendor-facilities">
                        <li>Basic Wash</li>
                        <li>Interior Cleaning</li>
                        <li>Wash & Shine</li>
                        <li>Awsome Wash</li>
                        <li>Basic Wash</li>
                        <li>Interior Cleaning</li>
                        <li>Wash & Shine</li>
                        <li>Awsome Wash</li>
                    </ul>
                </div>
            </div>
        );
    }
}
