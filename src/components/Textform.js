import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handlecopyClick = () => {
    document.getElementById("myBox").select();
    document.execCommand("copy");
    props.showAlert('Copied to clipboard','success')
  };

  const handleClearClick = () => {
    let clearText = " ";
    setText(clearText);
    props.showAlert('Text cleared successfully','success')
  };
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let lowerText = text.toLocaleLowerCase();
    setText(lowerText);
  };

  const handleOnchange = (e) => {
    // console.log("on change clicked");
    setText(e.target.value);
  };
  return (
    <>
      <div className="mb-3">
        <h1
          className={`text-center my-3 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          TEXT ANALYZER
        </h1>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#464646" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          value={text}
          onChange={handleOnchange}
          id="myBox"
          rows="7"
        ></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-info m-2" onClick={handleDownClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-info m-2" onClick={handlecopyClick}>
        Copy to Clipboard
      </button>
      <button className="btn btn-danger m-2" onClick={handleClearClick}>
        Clear text
      </button>

      <div>
        <h1
          className={`text-${props.mode === "light" ? "dark" : "light"}`}
        >
          Text Summary
        </h1>
        <h4 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Characters(Including space): {text.length}
        </h4>
        <h4 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
        </h4>
        <h4 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          No. of sentences: {text.split(".").length - 1}
        </h4>
      </div>
    </>
  );
}
