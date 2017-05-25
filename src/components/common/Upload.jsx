import React, { Component } from 'react';

class Upload extends Component {
    render() {
        return (
            <div className="upload-box-wrapper">
                <label htmlFor="file-input" className="upload-box">
                    <img src="../../images/attach.png" />
                </label>
                <input id="file-input" type="file" className="hide" onChange={this.props.uploadChange} multiple />
            </div>
        );
    }
}

export default Upload;