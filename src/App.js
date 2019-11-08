import React, { Component, Fragment } from 'react';
import './App.css';
import Navigator from './components/navigator';

class App extends Component {
  render() {
    return (
      <div className="header">
        <div className="container-fluid">
          <div className="col-md-12">
            <Fragment>
              <Navigator />
            </Fragment>
          </div>
        </div>
      </div>

    );

  }
}

export default App;

  