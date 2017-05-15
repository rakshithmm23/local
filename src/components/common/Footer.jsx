import React, {Component} from 'react';
import {map} from 'lodash';

export default class Footer extends Component {

  render() {
    const footerItem = [
      {
        footerHeading: 'About Carcility',
        sublist: [{
            title:"About Us",
            hyperLink: "#",
        },
        {
            title:"Blog",
            hyperLink: "#",
        },
        {
            title:"Careers",
            hyperLink: "#",
        },
        {
            title:"Contact Us",
            hyperLink: "#",
        }]
      },
      {
        footerHeading: 'For Vendors',
        sublist: [{
            title:"Become a Vendor",
            hyperLink: "#",
        }]
      },
       {
        footerHeading: 'Get In Touch',
        sublist: [{
            title:"+971-348-457934",
            hyperLink: "#",
        },
        {
            title:"support@carcility.com",
            hyperLink: "#",
        },
        {
            title:"9234 Gislason Mews Suite 847",
            hyperLink: "#",
        }]
      },
      {
        footerHeading: 'Help',
        sublist: [{
            title:"FAQs",
            hyperLink: "#",
        },
        {
            title:"Customer Care",
            hyperLink: "#",
        }]
      },
      {
        footerHeading: 'Social Media',
        sublist: [{
            socialIcon: "facebook",
            hyperLink: "#",
        },
        {
            socialIcon:"instagram",
            hyperLink: "#",
        },
        {
            socialIcon:"google-plus",
            hyperLink: "#",
        },
        {
            socialIcon:'twitter',
            hyperLink: "#",
        }]
      }
    ];

    const footerLink = map(footerItem, (item, key) => {
      const subList = map(item.sublist, (subItem, subKey) => {
        return (
          <li key={subKey}>
           { subItem.title ? <a href={subItem.hyperLink}> {subItem.title}</a> :
            <a href={subItem.hyperLink}> <i className ={"mdi mdi-" + subItem.socialIcon} /></a>
           }
          </li>
                  );
      });
      return (
          <div className={((key + 1) == footerItem.length || (key+1) == 3)? "col-md-3 col-sm-3 col-xs-12" : "col-md-2 col-sm-2 col-xs-12"} key={key}>
              <div className="footer-link">
                <h5>{item.footerHeading}</h5>
                {item.sublist && <ul className="list-unstyled">
                  {subList}
                </ul>}
              </div>
            </div>
        );
    });

    return (
      <div className="quickLink-section">
        <div className="padwrapper">
          <div className="container-fluid">
            {footerLink}
          </div>
        </div>
      </div>
    );
  }
}
