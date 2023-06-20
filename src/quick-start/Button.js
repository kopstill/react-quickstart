import React from "react";

export default function Button() {
  function handleClick() {
    alert("Clicked!");
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={handleClick}>I'm a button</button>
      </div>
      <div>
        <button onClick={handleClick}>I'm a button</button>
      </div>
      <div>
        <button onClick={handleClick}>I'm a button</button>
      </div>
    </React.Fragment>
  );
}
