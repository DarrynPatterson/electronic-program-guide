import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class ChannelListItem extends Component {
  render() {
    const channel = this.props.channel;
    const program = this.props.program;
    const progress = this.props.progress;

    const preferenceContent = (
      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: progress.percentageComplete + "%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>)

    const favoriteIconColor = progress.isFavorite ? "orange" : "";

    return (
      <a id={channel.id} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 text-center">
              <img style={{ width: "100px", height: "100px" }} src={channel.logo} alt={channel.title} />
              <h5 className="mt-2">{channel.title}</h5>
            </div>
            <div className="col-sm-10">
              <div className="ml-4">
                <h3>{program.title}</h3>
                <div className="float-right">
                  <FontAwesomeIcon icon={faStar} size="2x" style={{ color: favoriteIconColor }} />
                </div>
              </div>
              <div className="mt-4 mb-4 ml-4">
                <h5 className="text-muted">{program.time}</h5>
              </div>
              <div className="ml-4">
                {progress.isProgressAvailable && preferenceContent}
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default ChannelListItem;