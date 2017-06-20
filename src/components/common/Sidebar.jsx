import React, {Component} from 'react';
import {map} from 'lodash';
import '../../styles/sidebar.css';

export default class Sidebar extends Component {
  componentWillMount(){
   const currentPath = window.location.pathname;
   this.state = {
     currentPath: currentPath
   };
  }
  componentWillReceiveProps(){
   const currentPath = window.location.pathname;
   this.state = {
     currentPath: currentPath
   };
  }
  render() {
    const {bgColor} = this.props;
    const sidebarItems = [
      {
        iconName: 'mdi mdi-view-grid',
        name: 'Dashboard',
        hyperLink: '/dashboard'
      },
      {
        iconName: 'mdi mdi-pencil',
        name: 'Requests',
        hyperLink: '/request'
      },
      {
        iconName: 'mdi mdi-car',
        name: 'My Cars',
        hyperLink: '/mycar-list'
      },
      {
        iconName: 'mdi mdi-comment-processing',
        name: 'Messages',
        hyperLink: '/messages'
      },
      {
        iconName: 'mdi mdi-heart',
        name: 'Favourites',
        hyperLink: '/favourites'
      },
    ];

    const sideBarCardList = map(sidebarItems, (item, key) => {
      return (
        <li key={key} className={this.state.currentPath == item.hyperLink ? 'active': ''}>
          <a href={item.hyperLink}>
            {item.iconName && <label className={item.iconName}/> }
            <span>{item.name}</span>
          </a>
        </li>
      );
    });
    return (
      <div className="sidebar" style={{backgroundColor: bgColor ? bgColor : '#fff'}}>
          <ul className="list-unstyled">
              {sideBarCardList}
          </ul>
      </div>
    );
  }
}
