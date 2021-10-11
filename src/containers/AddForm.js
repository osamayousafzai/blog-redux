import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions';

import { Form, Button } from 'react-bootstrap';

class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({
      title,
      id,
    });
    this.setState({
      title: '',
    });
  }

  handleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h4>Add a new article</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formNewArticle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={this.handleChange} />
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
  };
};

export default connect(null, mapDispatchToProps)(AddForm);
