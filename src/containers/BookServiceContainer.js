import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions/';

export default function BookServiceContainer(ComposedComponent) {
  class BookServiceContainer extends Component {
    constructor(props) {
      super(props);
    }
    componentWillReceiveProps(nextProps){
console.log(nextProps)
    }

    render() {
      return (<ComposedComponent {...this.props}/>);
    }
  }

  function mapStateToProps(state) {
    return {carProfileReducer: state.carProfileReducer, authReducer: state.authReducer, bookServiceReducers: state.bookServiceReducers};
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators, dispatch)
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(BookServiceContainer);
}

BookServiceContainer.contextTypes = {
  router: React.PropTypes.object
};
