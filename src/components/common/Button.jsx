import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        const { btnType, btnSize, fontSize, label, btnCallBack, iconName } = this.props;
        const btnProperties = {};
        let btnClass = 'btn btn-theme ';
        let customStyle = {};
        if (fontSize) {
            customStyle.fontSize = Number(fontSize);
        }
        btnProperties.style = customStyle;
        btnProperties.className = btnClass + (btnSize ? (btnSize + " ") : '') + (btnType ? btnType : '');
        if (btnCallBack) {
          btnProperties.onClick = btnCallBack;
        }
        return (
          <button {...btnProperties}>
              {iconName && <i className={'mdi mdi-' + iconName}/>}
              {label}
          </button>
        );
    }
}
