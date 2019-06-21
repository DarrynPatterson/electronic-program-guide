import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSelectedItem } from "../../actions/menuActions";

class Topbar extends Component {
  static propTypes = {
    setSelectedItem: PropTypes.func.isRequired
  };

  static propTypes = {
    menu: PropTypes.object.isRequired
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Program Guide</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className={this.props.menu.selectedItem === "channels" ? "nav-link active" : "nav-link"}
                onClick={() => {this.props.setSelectedItem("channels")}}>
                Channels
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className={this.props.menu.selectedItem === "schedule" ? "nav-link active" : "nav-link"}
                onClick={() => {this.props.setSelectedItem("schedule")}}>
                Schedule
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(
  mapStateToProps,
  { setSelectedItem }
)(Topbar);