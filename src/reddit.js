import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
export default class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    try {
      axios.get('https://www.reddit.com/hot/.json').then(res => {
        var arr = [];
        for (var i = 0; i < 9; i++) {
          this.setState({
            post: res.data.data.children[i].data,
          });
          arr.push(this.state.post.title);
        }
        document.write(arr);
        console.log(res.data);
        console.log(arr);
      });
    } catch (e) {
      console.log(e.massage);
    }
  }

  render() {
    return (
      <div className="main">
        <div className="body">
          <div className="name">
            <p>Call API from reddit </p>
          </div>
          <div className="body-api">
            <div className="post post10">
              <p>{this.state.post.title}</p>
              <img src={this.state.post.thumbnail} alt="post" />
              url:<p className="url-color">{this.state.post.url}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
