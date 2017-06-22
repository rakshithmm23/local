import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { btnType, btnSize, disabled, fontSize, label, btnCallBack, iconName, customClass, backgroundColor, isSubmitBtn } = this.props;
        const btnProperties = {};
        let btnClass = 'btn btn-theme ';
        let customStyle = {};
        if (fontSize) {
            customStyle.fontSize = Number(fontSize);
        }
        if (backgroundColor) {
            customStyle.backgroundColor = backgroundColor;
        }
        btnProperties.style = customStyle;
        btnProperties.className = btnClass + (btnSize ? (btnSize + " ") : '') + (customClass ? (customClass + " ") : '') + (btnType ? btnType : '');
        if (btnCallBack) {
          btnProperties.onClick = btnCallBack;
        }
        if (disabled) {
          btnProperties.disabled = disabled;
        }
        if (isSubmitBtn) {
          btnProperties.type = "submit";
        }
        return (
          <button {...btnProperties}>
              {iconName && <i className={'mdi mdi-' + iconName}/>}
              {label}
          </button >
        );
    }
}
