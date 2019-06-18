import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
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
        this.setState({
          post: res.data.data.children.slice(0, 10),
        });
        console.log(res.data.data.children.slice(0, 10), 'array 8 ele');
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
            // console.log(p, 'p');
            const { data } = p;

            //chuyễn đỗi kỷ nguyên thành ngày có thể đọc được
            var myDate = new Date(data.created * 1000);
            console.log(myDate.toGMTString() + '---' + myDate.toLocaleString());

            return (
              <div className="body-api">
                <div className="post post10">
                  <p>{data.title}</p>
                  <p id="date">
                    {myDate.toGMTString() + '---' + myDate.toLocaleString()}
                  </p>
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
