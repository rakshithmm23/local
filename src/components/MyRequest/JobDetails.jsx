import React, { Component } from 'react';

class JobDetails extends Component {
    render() {
        debugger
        return (
            <div>
                <div className="data-time col-md-12">
                    <div className="col-md-4 margin-correction">
                        <div className="wrapper">
                            <title className="title">Requested On:</title>
                            <span>Jan 2, 2017</span>
                        </div>
                    </div>
                    <div className="col-md-4 margin-correction">
                        <div className="wrapper">
                            <title className="title">Job Start Time:</title>
                            <span>11:30 AM on Jan 5 2017</span>
                        </div>
                    </div>
                    <div className="col-md-4 margin-correction">
                        <div className="wrapper">
                            <title className="title">Preffered Location:</title>
                            <span>11:30 AM on Jan 5 2017</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 repair-detail">
                    <div className="col-md-6 repair-category">
                         <title>{this.props.serviceTypes+" Categories"}:</title>
                        <ul className="category-list">
                            <li>
                                <span className="interior-clean"/>
                                <label>Interior Clean (3 Selected)</label>
                            </li>
                            <li>
                                <span className="wash"/>
                                <label>Interior Clean (3 Selected)</label>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 more-details">
                         <title>{this.props.serviceTypes=="Car Wash"?"Special Instructions":"More Details"} :</title>
                        <p>In hac habitasse platea dictumst.
                        Vivamus adipiscing fermentum quam volutpat aliquam.
                        Integer et elit eget elit facilisis tristique.
                        Nam vel iaculis mauris.
                        Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod.
                        Brakes & Exhaust</p>
                    </div>
                </div>
                <div className= {this.props.serviceTypes!="Car Wash"?" col-md-12 uploads":"hide"}>
                    <title>{this.props.serviceTypes!="Car Wash"?"Uploads: ":""}</title>
                    {this.props.serviceTypes!="Car Wash"?<div className="col-md-6 images">
                         <div className="figure no-top-padding">
                             <h4>Car Images:</h4>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                         </div>
                    </div>:""}
                    {this.props.serviceTypes=="Emergency Service"&& <div className="col-md-6 images">
                         <div className="figure no-top-padding">
                             <h4>Police Report:</h4>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                         </div>
                    </div>}
                    {this.props.serviceTypes=="Emergency Service"&& <div className="col-md-6 images">
                         <div className="figure no-border" >
                             <h4>Driving Licence:</h4>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                         </div>
                    </div>}
                    {this.props.serviceTypes=="Emergency Service"&& <div className="col-md-6 images">
                         <div className="figure no-border">
                             <h4>Registration Card:</h4>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                         </div>
                    </div>}

                </div>
            </div>
        );
    }
}

export default JobDetails;
