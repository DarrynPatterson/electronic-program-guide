import React, { Component } from "react";
import { connect } from "react-redux";
import { getChannels } from "../../actions/channelActions";
import PropTypes from "prop-types";
import ChannelSchedule from "./ChannelSchedule";
import styles from "./App.css";

class Schedule extends Component {

  static propTypes = {
    getChannels: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getChannels();
  }

  render() {
    const channels = this.props.channels;
    const isLoading = this.props.isLoading;
    const rowWidth = 1440 * 0.75;
    const rowHeight = 100;

    const scheduleStyle = {
      position:"absolute",
      width: rowWidth,
      height: "800px",
      border:"1px solid black",
      overflowX: "scroll",
      marginTop: "50px"
    };

    return <div className="row h-100 justify-content-center">
      <div style={scheduleStyle}>
        {!isLoading && channels.map((channel, index) => {

          // Build build a row for each channel schedule
          const top = rowHeight * index;
          return (<ChannelSchedule id={channel.id} top={top} channelLogo={channel.images.logo} channelTitle={channel.title} schedule={channel.schedules} />)
        })}
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  channels: state.channelData.channels,
  isLoading: state.channelData.isLoading
});

export default connect(
  mapStateToProps,
  { getChannels }
)(Schedule);