// import packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

import AddForm from './AddForm';

class List extends Component {
  render() {
    return (
      <div>
        <div>
          <AddForm />
          <h4>Articles</h4>

          {this.props.articles.map((article) => (
            <Card>
              <Card.Body key={article.id}>{article.title}</Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articleReducer,
  };
};

export default connect(mapStateToProps, null)(List);
