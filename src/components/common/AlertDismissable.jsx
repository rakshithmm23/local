import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
export default class AlertDismissable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: true
    }
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
    if (this.props.closeAction){
      this.props.closeAction();
    }
  }

  render() {
    const {bsStyle, closeLabel} = this.props;
      return (
        <div>
        {this.state.alertVisible && <Alert bsStyle={bsStyle} closeLabel={closeLabel} onDismiss={this.handleAlertDismiss.bind(this)}>
        {this.props.children}
        </Alert> }
        </div>
      );
    }

}
