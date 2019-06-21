import React, { Component } from "react";
import { connect } from "react-redux";
import Topbar from "./Topbar";
import Breadcrumb from "./Breadcrumb";

class Content extends Component {

  render() {
    const selectedItem = this.props.menu.selectedItem;
    return (
        <div className="App">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container">
                <Breadcrumb name={selectedItem} />
                {selectedItem === 'channels' && "Channels"}
                {selectedItem === 'schedule' && "Schedule"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(
  mapStateToProps,
  null
)(Content);