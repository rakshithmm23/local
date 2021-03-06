import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions/';

export default function DashboardContainer(ComposedComponent) {
  class DashboardContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (<ComposedComponent {...this.props}/>);
    }
  }

  function mapStateToProps(state) {
    return {dashboardReducer: state.dashboardReducer};
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch)
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
}

DashboardContainer.contextTypes = {
  router: React.PropTypes.object
};
