import React, {Component} from 'react';
import {map} from 'lodash';
import '../../styles/sidebar.css';

export default class Sidebar extends Component {
  render() {
    const {bgColor} = this.props;
    const sidebarItems = [
      {
        iconName: 'mdi mdi-view-grid',
        name: 'Dashboard',
        hyperLink: '#'
      },
      {
        iconName: 'mdi mdi-pencil',
        name: 'Requests',
        hyperLink: '#'
      },
      {
        iconName: 'mdi mdi-car',
        name: 'My Cars',
        hyperLink: '#'
      },
      {
        iconName: 'mdi mdi-comment-processing',
        name: 'Messages',
        hyperLink: '#'
      },
      {
        iconName: 'mdi mdi-heart',
        name: 'Favourites',
        hyperLink: '#'
      },
    ];

    const sideBarCardList = map(sidebarItems, (item, key) => {
      return (
        <li key={key}>
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
