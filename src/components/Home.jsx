import React, {Component} from 'react';
import Dashboard from './Dashboard';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<Dashboard/>);
  }
}
