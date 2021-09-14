import React, { useState } from "react";

function Text(props) {
  const handelUpClick = () => {
    console.log("hi");
    setTest("handel Up Click");
  };
  const handelOnChange = () => {
    console.log("hy");
  };
  const [text, setTest] = useState("enter text Here");

  return (
    <div>
      <div className="mb-3 container">
        <h4>{props.heading}</h4>
        <textarea
          value={text}
          onChange={handelOnChange}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
        <button onClick={handelUpClick} className="btn btn-primary mt-4">
          Change Text
        </button>
      </div>
    </div>
  );
}

export default Text;
