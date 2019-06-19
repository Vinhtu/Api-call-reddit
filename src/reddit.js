import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
export default class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      postcomment: [],
      comment: false,
    };
  }
  comment = () => {
    this.setState({
      comment: !this.state.comment,
    });
  };
  componentDidMount() {
    try {
      axios.get('https://www.reddit.com/hot/.json').then(res => {
        this.setState({
          post: res.data.data.children.slice(0, 1),
        });
        // console.log(res.data.data.children.slice(0, 1));
      });
    } catch (e) {
      console.log(e.massage);
    }
  }
  componentDidUpdate() {
    this.state.post.map((post, ev) => {
      // console.log(post.data.permalink);

      // console.log('https://www.reddit.com' + post.data.permalink + '.json');
      axios
        .get('https://www.reddit.com' + post.data.permalink + '.json')
        .then(res => {
          this.setState({
            postcomment: res.data[1].data.children.slice(0, 10),
          });

          // console.log(res.data[1].data.children).slice(0, 10);
        });
    });
  }

  render() {
    if (!this.state.comment) {
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
                    <p>{data.title}</p>

                    <p>
                      {/* {myDate.toGMTString() + '---' + myDate.toLocaleString()} */}
                      {date.format('ddd MMMM Do YYYY, h:mm:ss a')}
                    </p>

                    <img src={data.thumbnail} alt="img" />

                    <p className="url-color">
                      <a href="#">
                        {' '}
                        url: https://www.reddit.com{data.permalink}
                      </a>
                    </p>

                    <p>Number comment: {data.num_comments}</p>

                    <button onClick={this.comment}>Comment</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else
      return (
        <div className="section">
          <div className="body">
            <button onClick={this.comment}>Back</button>
            {/* lấy comment của bài viết */}
            {this.state.postcomment.map((comment, ev) => {
              // console.log(post);
              return (
                <div>
                  <p />
                  <div className="font-comment">-{comment.data.body}</div>
                </div>
              );
            })}
          </div>
        </div>
      );
  }
}
