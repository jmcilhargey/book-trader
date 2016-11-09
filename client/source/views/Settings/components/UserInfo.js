"use strict";

import * as React from "react";
import book from "../../../images/book.svg";
import avatar from "../../../images/avatar.svg";
import envelope from "../../../images/envelope.svg";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }
  onNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  onEmailChange(event) {
    this.props.onEmailChange(event.target.value);
  }
  render() {
    let name = null;
    let email = null;
    if (this.props.editInfo) {
      name = <input className="form-input" type="text" value={ this.props.first } onChange={ this.onNameChange } />
      email = <input className="form-input" type="text" value={ this.props.email } onChange={ this.onEmailChange }/>
    } else {
      name = this.props.first
      email = this.props.email
    }
    return (
      <div className="user-info">
        <div className="user-datum">
          <div dangerouslySetInnerHTML={{ __html: avatar }}></div>
          <h3>
            <b>Name</b>
            { name }
          </h3>
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
