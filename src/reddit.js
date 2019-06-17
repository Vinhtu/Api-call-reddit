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
    axios.get('https://www.reddit.com/hot/.json').then(res => {
      for (var i = 0; i < 9; i++) {
        this.setState({
          post: res.data.data.children[i].data,
        });
      }
    });
  }

  render() {
    return (
      <div className="main">
        <div className="body">
          <div className="name">
            <p>Call API from reddit </p>
          </div>

          <div className="body-api">
            {/* <div className="post post1">
              <p>{this.state.post1.title}</p>
              <img src={this.state.post1.thumbnail} alt="post1" />
              url:<p className="url-color">{this.state.post1.url}</p>
            </div>
            <div className="post post2">
              <p>{this.state.post2.title}</p>
              <img src={this.state.post2.thumbnail} alt="post2" />
              url:<p className="url-color">{this.state.post2.url}</p>
            </div>
            <div className="post post3">
              <p>{this.state.post3.title}</p>
              <img src={this.state.post3.thumbnail} alt="post3" />
              url:<p className="url-color">{this.state.post3.url}</p>
            </div>
            <div className="post post4">
              <p>{this.state.post4.title}</p>
              <img src={this.state.post4.thumbnail} alt="post4" />
              url:<p className="url-color">{this.state.post4.url}</p>
            </div>
            <div className="post post5">
              <p>{this.state.post5.title}</p>
              <img src={this.state.post5.thumbnail} alt="post5" />
              url:<p className="url-color">{this.state.post5.url}</p>
            </div>
            <div className="post post6">
              <p>{this.state.post6.title}</p>
              <img src={this.state.post6.thumbnail} alt="post6" />
              url:<p className="url-color">{this.state.post6.url}</p>
            </div>
            <div className="post post7">
              <p>{this.state.post7.title}</p>
              <img src={this.state.post7.thumbnail} alt="post7" />
              url:<p className="url-color">{this.state.post7.url}</p>
            </div>
            <div className="post post8">
              <p>{this.state.post8.title}</p>
              <img src={this.state.post8.thumbnail} alt="post8" />
              url:<p className="url-color">{this.state.post8.url}</p>
            </div>
            <div className="post post9">
              <p>{this.state.post9.title}</p>
              <img src={this.state.post9.thumbnail} alt="post9" />
              url:<p className="url-color">{this.state.post9.url}</p>
            </div>
            <div className="post post10">
              <p>{this.state.post10.title}</p>
              <img src={this.state.post10.thumbnail} alt="post10" />
              url:<p className="url-color">{this.state.post10.url}</p>
            </div> */}
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
