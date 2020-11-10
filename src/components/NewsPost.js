import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';

export default class NewsPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      listComment: [],
      url: '',
    };
  }

  componentDidMount() {
    try {
      axios.get('https://www.reddit.com/hot/.json').then(res => {
        this.setState({
          post: res.data.data.children.slice(0, 1),
        });
      });
    } catch (e) {
      console.log(e.massage);
    }
  }
  componentDidUpdate() {
    try {
      axios
        .get(
          'https://www.reddit.com' +
            this.props.location.state.data.permalink +
            '.json'
        )
        .then(res => {
          this.setState({
            listComment: res.data[1].data.children.slice(0, 10),
            url:
              'https://www.reddit.com' +
              this.props.location.state.data.permalink,
          });
          console.log(res.data[1].data.children.slice(0, 10));
        });
    } catch (e) {
      console.log(e.massage);
    }
  }

  render() {
    // console.log(this.props.location.state.data);
    return (
      <div className="section">
        <div className="body">
          <div className="header">
            <p>Call API reddit </p>
          </div>
          {this.state.post.map((p, idx) => {
            var date = moment.unix(this.props.location.state.data.created);

            return (
              <div className="body-api">
                <div className="post">
                  <p>{this.props.location.state.data.title}</p>
                  <p>{date.format('ddd MMMM Do YYYY, h:mm:ss a')}</p>
                  <img
                    src={this.props.location.state.data.thumbnail}
                    alt="img"
                  />
                  <p className="post-url">
                    <a href={this.state.url}>
                      {' '}
                      url: https://www.reddit.com
                      {this.props.location.state.postUrl}
                    </a>
                  </p>
                  <p>Comment:{this.props.location.state.data.num_comments}</p>
                  {this.state.listComment.map((comment, ev) => {
                    return (
                      <div>
                        <ul>
                          <li>{comment.data.body}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
