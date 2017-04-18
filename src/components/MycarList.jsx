import React, {Component} from 'react';
import Header from './common/Header';
import Sidebar from './common/Sidebar';


export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="main-wrapper">
          <Sidebar/>
        </div>
      </div>
    );
  }
}
