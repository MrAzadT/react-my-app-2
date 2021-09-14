import React from "react";

function Text(props) {
  return (
    <div>
      <div className="mb-3 container">
        <h4>{props.heading}</h4>
        <textarea className="form-control" id="myBox" rows="8"></textarea>
      </div>
    </div>
  );
}

export default Text;
