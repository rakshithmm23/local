import React, { Component } from 'react';
import { map, each } from 'lodash';


class Upload extends Component {
    constructor() {
        super()
        this.cancelImageUpload = this.cancelImageUpload.bind(this);
        this.fileNameUpload = this.fileNameUpload.bind(this);
    }
    cancelImageUpload(val){
        const array = this.props.uploadData;
        array.splice(val, 1);
        this.props.uploadCallBack(this.props.name, array)
        // this.setState({imageUploaded: array });
    }
    fileNameUpload(e) {
        let files = []
        each(e.target.files, (val) => {
            files.push({ name: val.name, path: URL.createObjectURL(val) })
        });
        // upload = { ...this.state.imageUploaded, files }
        // this.setState({
        //     imageUploaded: this.state.imageUploaded.concat(files)
        // })
        this.props.uploadCallBack(this.props.name, this.props.uploadData.concat(files))
    }
    render() {
        let className = "upload-box-wrapper "+this.props.responsiveSize;
        const imageUploadedView = map(this.props.uploadData, (img,index) => {
            return (
                <div className={className}>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={()=>{this.cancelImageUpload(index)}}>
                            <i className="mdi mdi-close"></i>
                        </span>
                        <img src={img.path} />
                    </div>
                    {/*<h5>{img.name}</h5>*/}
                </div>
            )
        })
        return (
            <div className="img-uploads" key={this.props.name}>
                <div className="clearfix">


                <div className={className}>
                    <label htmlFor="file-input" className="upload-box">
                        <img src="../../images/attach.png" />
                    </label>
                    <input id="file-input" type="file" className="hide" onChange={(e) => this.fileNameUpload(e)} multiple />
                </div>
                {imageUploadedView}
                </div>
             </div>
        );
    }
}

export default Upload;
