"use strict";

import * as React from "react";
import book from "../../../images/book.svg";
import mail from "../../../images/mail.svg";
import info from "../../../images/info.svg";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-info">
        <div className="user-datum">
          <i dangerouslySetInnerHTML={{ __html: info }} />
          <h3><b>Name</b> { this.props.first } { this.props.last }</h3>
        </div>
        <div className="user-datum">
          <i dangerouslySetInnerHTML={{ __html: mail }} />
          <h3><b>Email</b> { this.props.email }</h3>
        </div>
        <div className="user-datum">
          <i dangerouslySetInnerHTML={{ __html: book }} />
          <h3><b>Books</b> { this.props.books }</h3>
        </div>
      </div>
    );
  }
}

export default UserInfo
