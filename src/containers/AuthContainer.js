import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions/';

export default function AuthContainer(ComposedComponent) {
  class AuthContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      debugger;
      return (<ComposedComponent {...this.props}/>);
    }
  }

  function mapStateToProps(state) {
    return {authReducer: state.authReducer};
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch)
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
}

AuthContainer.contextTypes = {
  router: React.PropTypes.object
};
