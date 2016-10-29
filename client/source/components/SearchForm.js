"use strict";

import * as React from "react";
import fetch from "isomorphic-fetch";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleDelete(event) {
    alert("This would delete a book");
  }
  handleSubmit(event) {
    this.props.onChange(this.state.value.trim());
  }
  render() {
    return (
      <div className="form-container">
        <input className="form-input"
          type="text"
          value={ this.state.value }
          onChange={ this.handleChange } />
        <button className="form-button"
          onClick={ this.handleSubmit }>Find Book</button>
        <button className="delete-button"
          onClick={ this.handleDelete }>Remove Book</button>
      </div>
    );
  }
}

export default SearchForm
