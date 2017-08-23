import React, { Component } from 'react';

export default class Photos extends Component {
    render() {
        return (
            <div className="vendor-services">
                <div className="vendor-description">
                    <h4>Photos</h4>
                    <ul className="figure">
                        <li className="upload-images">
                            <img src="../../images/test.jpg" alt="" />
                        </li>
                        <li className="upload-images">
                            <img src="../../images/test.jpg" alt="" />
                        </li>
                        <li className="upload-images">
                            <img src="../../images/test.jpg" alt="" />
                        </li>
                        <li className="upload-images wrap-photo">
                            <img src="../../images/test.jpg" alt="" />
                            <span className="more-photos">+ 10 more</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
