import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <button onClick={props.handleDeleteOptions}>remove all</button>
       {props.options.length === 0 && <p>please add options</p>}
     {" "}
    {props.options.map((option, i) => (
      <Option
        key={i}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
