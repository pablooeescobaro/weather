import React from "react";
import "../styles/input.scss";

function Input(params) {
  return (
    <div className={params.className}>
      <div className="input">
        <input
          onChange={(event) => params.onChange(event.target.value)}
          onKeyPress={params.onKeyPress}
          placeholder="Enter location"
          value={params.value}
          type="text"
        />
      </div>
    </div>
  );
}

export default Input;
