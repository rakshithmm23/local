import React, { Component } from 'react';

export default class Badge extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { badgeType, children, fontSize } = this.props;
        let badgeClass = 'status-label ';
        let customStyle = {};
        if (fontSize) {
            customStyle.fontSize = Number(fontSize);
        }
        return (
                <div style={customStyle} className={badgeClass + (badgeType ? badgeType : '')}>
                    {children}
                </div>
        );
    }
}
