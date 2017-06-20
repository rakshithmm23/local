import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions/';

export default function CarProfileContainer(ComposedComponent) {
  class CarProfileContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (<ComposedComponent {...this.props}/>);
    }
  }

  function mapStateToProps(state) {
    return {carProfileReducer: state.carProfileReducer};
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch)
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(CarProfileContainer);
}

CarProfileContainer.contextTypes = {
  router: React.PropTypes.object
};
