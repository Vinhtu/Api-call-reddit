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

        this.setState({
          post: res.data.data.children,
        });
        // arr.push(this.state.post.title);
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
          {this.state.post.map((p, idx) => {
            console.log(p, 'p');
            const { data } = p;
            return (
              <div className="body-api">
                <div className="post post10">
                  <p>{data.title}</p>
                  <img src={data.thumbnail} alt="post" />
                  url:<p className="url-color">{data.url}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
