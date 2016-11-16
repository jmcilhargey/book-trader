"use strict";

import * as React from "react";
import book from "../../../images/book.svg";
import avatar from "../../../images/avatar.svg";
import envelope from "../../../images/envelope.svg";
import home from "../../../images/home.svg";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onFirstChange = this.onFirstChange.bind(this);
    this.onLastChange = this.onLastChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }
  onFirstChange(event) {
    this.props.onFirstChange(event.target.value);
  }
  onLastChange(event) {
    this.props.onLastChange(event.target.value);
  }
  onCityChange(event) {
    this.props.onCityChange(event.target.value);
  }
  onStateChange(event) {
    this.props.onStateChange(event.target.value);
  }
  onEmailChange(event) {
    this.props.onEmailChange(event.target.value);
  }
  render() {
    let first = null;
    let last = null;
    let city = null
    let state = null;
    let email = null;
    let username = this.props.username;
    if (this.props.editInfo) {
      first = <input className="form-input" type="text" value={ this.props.first } onChange={ this.onFirstChange } />
      last = <input className="form-input" type="text" value={ this.props.last } onChange={ this.onLastChange } />
      city = <input className="form-input" type="text" value={ this.props.city } onChange={ this.onCityChange } />
      state = <input className="form-input" type="text" value={ this.props.state } onChange={ this.onStateChange } />
      email = <input className="form-input" type="text" value={ this.props.email } onChange={ this.onEmailChange } />
    } else {
      first = this.props.first
      last = this.props.last
      city = this.props.city;
      state = this.props.state;
      email = this.props.email
    }
    return (
      <div className="user-info">
        <div className="user-datum">
          <div dangerouslySetInnerHTML={{ __html: avatar }}></div>
          <div className="user-name">
            <h3>
              <b>Username</b>
              { username }
            </h3>
            <h3>
              <b>First Name</b>
              { first }
            </h3>
            <h3>
              <b>Last Name</b>
              { last }
            </h3>
          </div>
        </div>
        <div className="user-datum">
          <div dangerouslySetInnerHTML={{ __html: home }}></div>
          <div className="user-name">
            <h3>
              <b>City</b>
              { city }
            </h3>
            <h3>
              <b>State</b>
              { state }
            </h3>
          </div>
        </div>
        <div className="user-datum">
          <div dangerouslySetInnerHTML={{ __html: envelope }}></div>
          <h3>
            <b>Email</b>
            { email }
          </h3>
        </div>
        <div className="user-datum">
          <div dangerouslySetInnerHTML={{ __html: book }}></div>
          <h3><b>Books</b></h3>
        </div>
      </div>
    );
  }
}

export default UserInfo
