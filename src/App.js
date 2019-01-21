import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Tutorial from './setup/Tutorial';
import Home from './setup/Home';
import ScrollToTop from './setup/ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tutorial/:tutorial" component={Tutorial} />
                <Route component={Home} />
              </Switch>
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
