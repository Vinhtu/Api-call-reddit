import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      postcomment: [],
      urlPost: '',
      comment: '',
    };
  }

  componentDidMount() {
    try {
      axios.get('https://www.reddit.com/hot/.json').then(res => {
        this.setState({
          post: res.data.data.children.slice(0, 3),
        });
      });
    } catch (e) {
      console.log(e.massage);
    }
  }

  render() {
    return (
      <div className="section">
        <div className="body">
          <div className="header">
            <p>Call API from reddit </p>
          </div>
          {this.state.post.map((p, idx) => {
            const { data } = p;
            var date = moment.unix(data.created);

            return (
              <div className="body-api">
                <div className="post">
                  <Link
                    className="url-post"
                    to={{
                      pathname: '/news-post',
                      state: {
                        postUrl: data.permalink,
                        data: data,
                      },
                    }}
                    activeClassName="active"
                    exact={true}
                  >
                    {data.title}
                  </Link>
                  <p>{date.format('ddd MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
