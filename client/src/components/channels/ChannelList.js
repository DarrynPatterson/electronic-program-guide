import React, { Component } from "react";
import { connect } from "react-redux";
import { getChannels } from "../../actions/channelActions";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class ChannelList extends Component {

  static propTypes = {
    getChannels: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getChannels();
  }

  render() {
    const channels = this.props.channels;
    const userPreferences = this.props.userPreferences;
    const isLoading = this.props.isLoading;

    return (
      <>
        {isLoading && (<FontAwesomeIcon icon={faSpinner} spin />)}
      </>
    );
  }
}

const mapStateToProps = state => ({
  channels: state.channelData.channels,
  userPreferences: state.channelData.userPreferences,
  isLoading: state.channelData.isLoading
});

export default connect(
  mapStateToProps,
  { getChannels }
)(ChannelList);