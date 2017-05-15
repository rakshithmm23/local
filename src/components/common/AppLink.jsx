import React, {Component} from 'react';

export default class AppLink extends Component {

  render() {
    return (
      <div className="appLink-section">
          <div className="padwrapper">
            <div className="container-fluid">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="app-left">
                  <img src="../../images/secondary-logo.png" alt="carcility-logo"/>
                  <h5>Get car services at your fingertips.<br/> Download the app!</h5>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="app-right">
                  <div className="app-right-content">
                    <h5>Get the app on your phone</h5>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter Phone Number"/>
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button">Get SMS Link</button>
                        </span>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a href="">
                        <img src="../../images/google-store.png" alt=""/>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src="../../images/apple-store.png" alt=""/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
