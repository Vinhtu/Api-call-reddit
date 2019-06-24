import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './utils/history';
import PostList from './components/PostList';
import Newspost from './components/NewsPost';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      // <Router history={history}>
      //   <Switch>
      //     <Route path="/" component={PostList} exact={true} />
      //     <Route path="/news-post" component={Newspost} />
      //   </Switch>
      // </Router>
      <Post />
    );
  }
}

export default App;
