import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router';
import Newspost from './newspost';
import { history } from './utils/history';
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      postcomment: [],
      urlPost: '',
    };
  }

  componentDidMount() {
    try {
      axios.get('https://www.reddit.com/hot/.json').then(res => {
        this.setState({
          post: res.data.data.children.slice(0, 3),
        });
        // console.log(res.data.data.children.slice(0, 1));
        // console.log(res.data.data.children[0].data.permalink);
      });
    } catch (e) {
      console.log(e.massage);
    }
  }
  //   url = () => {
  //     this.setState({
  //       urlPost: this.state.post[0].data.permalink,
  //     });
  //   };
  render() {
    return (
      <div className="section">
        <div className="body">
          <div className="header">
            <p>Call API from reddit </p>
          </div>
          {this.state.post.map((p, idx) => {
            // console.log(post);

            const { data } = p;

            //chuyễn đỗi kỷ nguyên thành ngày có thể đọc được cách 1 không cần dùng thư viện moment

            // var myDate = new Date(data.created * 1000);
            // console.log(myDate.toGMTString() + '---' + myDate.toLocaleString());

            //cách này thì sử dụng thư viện moment
            var date = moment.unix(data.created);
            // console.log(date.format('ddd MMMM Do YYYY, h:mm:ss a'));

            //lấy url của post

            //truy cập vào url comment

            return (
              <div className="body-api">
                <div className="post">
                  {/* <p onClick={this.url}> */}
                  <NavLink
                    to={{
                      pathname: '/news-post',
                      postUrl: data.url,
                    }}
                    activeClassName="active"
                    exact={true}
                  >
                    {data.title}
                  </NavLink>
                  {/* </p> */}
                  <p>
                    {/* {myDate.toGMTString() + '---' + myDate.toLocaleString()} */}
                    {date.format('ddd MMMM Do YYYY, h:mm:ss a')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
