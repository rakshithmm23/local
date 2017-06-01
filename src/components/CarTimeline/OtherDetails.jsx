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
                        <span>{this.state.insuranceProvider}</span>
                    </li>
                    <li>
                        <label>Insurance Policy Number</label>
                        <span>{this.state.insurancePolicyNumber}</span>
                    </li>
                    <li>
                        <label>State</label>
                        <span>{this.state.insuranceState}</span>
                    </li>
                    <li>
                        <label>Registration Number</label>
                        <span>{this.state.registrationNumber}</span>
                    </li>
                    <li>
                        <label>Car Notes</label>
                        <span>
                            <p contentEditable={this.state.contentEditable ? "true" : "false"}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis.
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Aenean commodo ligula eget dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis.
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
