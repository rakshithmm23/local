import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { btnType, btnSize, children, fontSize } = this.props;
        let btnClass = 'btn btn-theme ';
        let customStyle = {}; 
        if (fontSize) {
            customStyle.fontSize = Number(fontSize);
        }
        return (
                <button style={customStyle} className={btnClass + (btnSize ? (btnSize + " ") : '') + (btnType ? btnType : '')}>
                    {children}
                </button>
        );
    }
}
