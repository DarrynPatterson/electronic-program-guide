import React, { Component } from "react";

class Breadcrumb extends Component {
  render() {
    return (
        <div className="text-center mt-4 mb-4">
            <h1>{this.props.name}</h1>
        </div>
    );
  }
}

export default Breadcrumb;