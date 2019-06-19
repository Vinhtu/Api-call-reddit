import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../utils/history';
import Post from '../post';
import Newspost from '../newspost';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Post} exact={true} />
          <Route path="/news-post" component={Newspost} />
        </Switch>
      </Router>
    );
  }
}

export default App;
