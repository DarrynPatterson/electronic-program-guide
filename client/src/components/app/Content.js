import React, { Component } from "react";
import { connect } from "react-redux";
import Topbar from "./Topbar";
import ChannelList from "../channels/ChannelList";
import Schedule from "../schedule/Schedule";

class Content extends Component {

  render() {
    const selectedItem = this.props.menu.selectedItem;
    return (
        <div className="App">
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div>
                {selectedItem === 'channels' && <ChannelList />}
                {selectedItem === 'schedule' && <Schedule />}
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