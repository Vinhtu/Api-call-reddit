import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    try {
      axios
        .get(
          'https://www.reddit.com/r/AskReddit/comments/c1qjr8/what_is_your_favorite_running_joke_from_a_tv/.json'
        )
        .then(res => {
          this.setState({
            post: res.data,
          });
          console.log(res.data);
        });
    } catch (e) {
      console.log(e.massage);
    }
  }
  render() {
    return <div />;
  }
}
