import React from "react";

const Program = ({id, title, startTime, endTime, top, left, width}) => {

  return (
    <div
      id={id}
      className="text-center"
      style={{
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: "100px",
        wordWrap: "break-word",
        border: "1px solid black",
      }}>
        <div style={{fontSize:"14px", fontWeight:"bold"}}>{title}</div>
        <div className="mt-2">
          <small className="text-muted">{startTime}-{endTime}</small>
        </div>
    </div>
  );
}


export default Program;