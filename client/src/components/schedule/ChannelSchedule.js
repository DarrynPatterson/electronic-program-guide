import React, { Component } from "react";
import Program from "./Program";
import moment from "moment";

class ChannelSchedule extends Component {

  render() {
    const id = this.props.id;
    const top = this.props.top;
    const channelLogo = this.props.channelLogo;
    const channelTitle = this.props.channelTitle;
    const schedule = this.props.schedule;

    const rowWidth = 1440; // 1440 minutes in a day. Convenient measurement
    let cellPositions = [];
    let accLeft = 100; // Accumulative left. Starts at 100 to account for the with of the channel logo
    let minutesMultiplier = 4; // If set to 1, then each program's minute will be represented by 1px

    // Build an array of program cell positions
    schedule.forEach((program, index) => {
      const startTime = moment(program.start);
      const endTime = moment(program.end);
      const duration = moment.duration(endTime.diff(startTime));
      const width = duration.asMinutes();
      accLeft = index > 0 ? accLeft + cellPositions[index - 1].width : accLeft;
      cellPositions.push({"left": accLeft, "width": width * minutesMultiplier});
    });    

    return <>
      <div id={id} style={{position:"absolute", width:`${rowWidth}px`, top:`${top}px`}}>
        <img style={{ width:"99px", height:"99px", float:"left", backgroundColor:"white" }} src={channelLogo} alt={channelTitle} />
      </div>

      {schedule.map((program, index) => {
        
        return(<Program 
          id={program.id} 
          title={program.title} 
          startTime={moment(program.start).format("HH:mm")} 
          endTime={moment(program.end).format("HH:mm")} 
          top={top} 
          left={cellPositions[index].left} 
          width={cellPositions[index].width} />)
      })}
    </>;
  }
}

export default ChannelSchedule;