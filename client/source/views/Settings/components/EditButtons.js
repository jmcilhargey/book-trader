"user strict";

import * as React from "react";

class EditButtons extends React.Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onEditInfo = this.onEditInfo.bind(this);
    this.onEditBooks = this.onEditBooks.bind(this);
  }
  onEditInfo() {
    this.props.onEditInfo();
  }
  onEditBooks() {
    this.props.onEditBooks();
  }
  onSave() {
    this.props.onSave();
  }
  render() {
    return (
      <div className="settings-control">
        <h2>My Settings</h2>
        { this.props.isEdit ?
          <button className="save-button" onClick={ this.onSave }>Save Changes</button> :
          <div>
            <button className="info-button" onClick={ this.onEditInfo }>Edit Info</button>
            <button className="book-button" onClick={ this.onEditBooks }>Edit Books</button>
          </div>
        }
      </div>
    );
  }
}

export default EditButtons
