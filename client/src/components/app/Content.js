import React, { Component } from "react";
import { connect } from "react-redux";

class Content extends Component {

  render() {
    return (
        <div className="App">EPG</div>
    );
  }
}

export default connect(
  null,
  null
)(Content);