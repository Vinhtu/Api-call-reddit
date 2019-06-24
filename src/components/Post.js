import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
    var { products } = this.props;
    return (
      <div className="section">
        <div className="body">
          <div className="header">
            <p>Call API from reddit </p>
          </div>

          <div className="body-api">
            {products.map((products, ind) => {
              console.log(products.id);
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

export default connect(
  mapStateToProps,
  null
)(Post);
