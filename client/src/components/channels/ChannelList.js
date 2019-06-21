import React, { Component } from "react";
import { connect } from "react-redux";
import { getChannels } from "../../actions/channelActions";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ChannelListItem from "./ChannelListItem";
import moment from "moment";

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

        <div className="list-group">
          {!isLoading && channels.map(channelData => {

              const orderedPrograms = channelData.schedules.sort((a, b) => a.start > b.start);
              const nextProgram = orderedPrograms[0];
              const startTime = moment(nextProgram.start).format("HH:mm");
              const endTime = moment(nextProgram.end).format("HH:mm");

              // Define channel object
              let channel = {
                id: channelData.id,
                title: channelData.title,
                logo: channelData.images.logo
              };

              // Define program object
              let program = {
                title: nextProgram.title,
                time: `${startTime} - ${endTime}`
              };

              // Define progress object
              let progress = {
                isProgressAvailable: false,
                isFavorite: null,
                percentageComplete: null
              };

              // Does this program have user preferences?
              const preferences = userPreferences.programs.find((program) => {
                return program.id === nextProgram.id
              });

              // Update progress object if preferences exist              
              if (typeof preferences !== "undefined") {
                progress.isProgressAvailable = true;
                progress.isFavorite = preferences.progress.position > 0;
                progress.percentageComplete = preferences.progress.percentage;
              }

              return (
                <ChannelListItem
                  channel={channel}
                  program={program}
                  progress={progress} />
              );
            })}
        </div>
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