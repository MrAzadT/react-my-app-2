import React, { useState } from "react";

function Text(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setTest(newText);
  };

  const handelLowerClick = () => {
    let newText = text.toLowerCase();
    setTest(newText);
  };

  const handelClearClick = () => {
    let newText = "";
    setTest(newText);
  };

  const handelOnChange = (e) => {
    console.log("hy");
    setTest(e.target.value);
  };

  const [text, setTest] = useState("enter text Here");

  return (
    <div className="">
      <div className="mb-3  container">
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
        <button
          onClick={handelLowerClick}
          className="btn btn-primary mt-4 mx-4"
        >
          Lower Case
        </button>
        <button
          onClick={handelClearClick}
          className="btn btn-primary mt-4 mx-4"
        >
          clear
        </button>
      </div>

      <div className="container">
        <h1>your Text </h1>
        <h3>
          {text.split(" ").length} words and {text.length} characters
        </h3>
        <p>preview -- {text}</p>
      </div>
    </div>
  );
}

export default Text;
