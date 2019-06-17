import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons1: [],
      persons2: [],
      persons3: [],
      name: '',
      reddit: [],
    };
  }
  // componentDidMount() {
  //   try {
  //     axios
  //       .get('https://api.github.com/users/mzabriskie/orgs')
  //       .then(Response => {
  //         console.log(Response);
  //         this.setState({
  //           persons1: Response.data[0],
  //           persons2: Response.data[1],
  //           persons3: Response.data[2],
  //         });
  //         console.log(this.state.persons3);
  //       });
  // } catch (e) {
  //   console.log(e.massage);
  // }
  // }

  // onChange = ev => {
  //   this.setState({
  //     name: ev.target.value,
  //   });
  // };

  // postSubmit = ev => {
  //   ev.preventDefault();
  //   console.log('action');
  //   axios
  //     .post('https://api.github.com/users/mzabriskie/orgs', this.state.name)
  //     .then(Response => {
  //       console.log(Response);
  //       console.log('actioning');
  //     });
  // };

  // Api1 = () => {
  //   return axios.get('https://api.github.com/users/mzabriskie/orgs');
  // };

  // Api2 = () => {
  //   return axios.get('https://api.github.com/users/mzabriskie/orgs');
  // };

  // componentDidMount() {
  //   axios.all([this.Api1, this.Api2]).then(
  //     axios.spread(function(a1, a2) {
  //       this.setState({
  //         persons1: a1.data.concat,
  //         persons2: a2.data.id,
  //       });
  //     })
  //   );
  //   console.log(this.state.persons1);
  //   console.log(this.state.persons2);
  // }

  componentDidMount() {
    // axios
    //   .get('https://www.reddit.com/r/gtaonline/')
    //   .then(data => data.json())
    //   .then(Response => {
    //     this.setState({
    //       reddit: Response.data,
    //     });
    //   });
    // console.log(this.state.reddit);
    // 

  }

  render() {
    return (
      <div className="App">
        <div className="api">
          <div className="name"> Call Api with Axios</div>
          <div className="main-api">
            <div>{this.state.reddit.concat}</div>
            {/* <div>{this.state.persons1.id}</div>
            <div>{this.state.persons2.id}</div>
            <div>{this.state.persons3.id}</div> */}
          </div>
          {/* <div className="post"> Post Api with Axios</div>
          <form onSubmit={this.postSubmit} className="put">
            <input id="input" name="name" onChange={this.onChange} />
            <button>Post</button>
          </form> */}
        </div>
      </div>
    );
  }
}

export default App;
