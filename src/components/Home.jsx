import React, {Component} from 'react';

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
