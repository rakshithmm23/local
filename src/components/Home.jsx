import React, {Component} from 'react';
import Auth from './Auth';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
