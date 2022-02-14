import React from "react";
import '../styles/button.scss'

function Button(params) {
  return (
    <button onClick={() => params.onClick()} className="button">
      {params.text}
    </button>
  );
}

export default Button;
