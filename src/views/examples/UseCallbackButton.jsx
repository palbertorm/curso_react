import React, { useState } from "react";

const UseCallbackButton = (props) => {
    console.log('server')
  return (
    <div>
      <button className="btn" onClick={() => props.inc(+6)}>
        +6
      </button>
      <button className="btn" onClick={() => props.inc(+12)}>
        +12
      </button>
      <button className="btn" onClick={() => props.inc(1+8)}>
        +18
      </button>
    </div>
  );
};
export default React.memo(UseCallbackButton);
