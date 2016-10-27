"use strict";

import * as React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value.substr(0, 140) });
  }
  handleDelete(event) {
    alert("This would delete a book");
  }
  handleSubmit(event) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        console.log(response)
        if (xmlhttp.status === 200 && response === "OK") {
          console.log("OK");
        } else {
          console.log("ERROR");
        }
      }
    }
    xmlhttp.open("POST", "api/books", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("search=" + this.state.value);
  }
  render() {
    return (
      <div className="form-container">
        <input className="form-input"
          type="text"
          value={ this.state.value }
          onChange={ this.handleChange } />
        <button className="form-button"
          onClick={ this.handleSubmit }>Add Book</button>
        <button className="delete-button"
          onClick={ this.handleDelete }>Remove Book</button>
      </div>
    );
  }
}

export default Form
