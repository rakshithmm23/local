import React, { Component } from 'react';


class Upload extends Component {
    constructor() {
        super()
        this.state = {
            
        };
    }
    
    
    render() {
        let className = " "+this.props.responsiveSize;
        
        return (
                <div className="upload-box-wrapper">
                    <label htmlFor="file-input" className="upload-box">
                        <img src="../../images/attach.png" />
                    </label>
                    <input id="file-input" type="file" className="hide" onChange={this.props.fileUpload} multiple />
                </div>
                
        );
    }
}

export default Upload;