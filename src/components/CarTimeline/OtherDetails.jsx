import React, { Component } from 'react';

export default class OtherDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentEditable: false,
            insuranceProvider: "Al - Sabah Insurance",
            insurancePolicyNumber: "AL-SI-2345",
            insuranceState: "Dubai",
            registrationNumber:"98072345",
        };
    }
    contentEditableValue(){
        this.setState({ contentEditable: true });
    }

    changeIcon(val){
        if(val=="edit"){
            this.setState({ contentEditable: true });
        }else{
            this.setState({ contentEditable: false });
        }
    }

    render() {
        return (
            <div className="otherDetails-content">
                <ul>
                    <li>
                        <label>Insurance Provider</label>
                        <span>{this.props.insuranceprovider}</span>
                    </li>
                    <li>
                        <label>Insurance Policy Number</label>
                        <span>{this.props.insurancepolicynumber}</span>
                    </li>
                    <li>
                        <label>State</label>
                        <span>{this.props.state}</span>
                    </li>
                    <li>
                        <label>Registration Number</label>
                        <span>{this.props.registrationnumber}</span>
                    </li>
                    <li>
                        <label>Car Notes</label>
                         <span>
                            <p contentEditable={this.state.contentEditable ? "true" : "false"}>
                                {this.props.carnotes ? this.props.carnotes : '-'}
                            </p>
                            {this.state.contentEditable?
                                <a onClick={()=>{this.changeIcon('removeEdit');}}><i className="mdi mdi-check"/> Done</a>:
                                <a onClick={()=>{this.changeIcon('edit');}}><i className="mdi mdi-pencil"/> Edit</a>
                            }
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
}
