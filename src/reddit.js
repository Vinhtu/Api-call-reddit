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
      comment: [],
    };
  }

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
    return (
      <div className="main">
        <div className="body">
          <div className="name">
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

            //truy cập vào url comment

            return (
              <div className="body-api">
                <div className="post post10">
                  <p>{data.title}</p>

                  <p id="date">
                    {/* {myDate.toGMTString() + '---' + myDate.toLocaleString()} */}
                    {date.format('ddd MMMM Do YYYY, h:mm:ss a')}
                  </p>

                  <img src={data.thumbnail} alt="post" />

                  <p className="url-color">url: {data.url}</p>

                  <p>Number comment: {data.num_comments}</p>

                  <p>Comment:</p>
                  {/* lấy comment của post */}
                  {this.state.postcomment.map((post, ev) => {
                    // console.log(post);
                    return (
                      <div>
                        <p />
                        <div>-{post.data.body}</div>
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
