import React, { Component } from 'react';

class Upload extends Component {
    render() {
        return (
            <div className="upload-box-wrapper">
                <label htmlFor="file-input" className="upload-box">
                    <img src="../../images/attach.png" />
                </label>
                <input id="file-input" type="file" className="hide" onChange={(e) => this.fileNameUpload(e)} multiple />
            </div>
        );
    }
}

export default Upload;