import React, { Component } from "react";

class Breadcrumb extends Component {
  render() {
    return (
        <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
            <h1>{this.props.name}</h1>
        </div>
    );
  }
}

export default Breadcrumb;