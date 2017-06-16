import React, { Component } from 'react';


class Upload extends Component {
    render() {
        let className = "upload-box-wrapper";
        return (
            <div className={className}>
                <label htmlFor={this.props.id} className="upload-box">
                    <i className="mdi mdi-attachment"></i>
                </label>
                <input id={this.props.id} type="file" className="hide" onChange={this.props.fileUpload} multiple />
            </div>
        );
    }
}

export default Upload;
