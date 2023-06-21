import React, { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={handleClick}>Click {count} times</button>
      </div>
      <div>
        <button onClick={handleClick}>Click {count} times</button>
      </div>
      <div>
        <button onClick={handleClick}>Click {count} times</button>
      </div>
    </React.Fragment>
  );
}
