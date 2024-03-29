import React, { useRef } from "react";

export const Start = ({ setUsername }) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value)
  }
  return (
    <div className="start">
      <input
        type="text"
        placeholder="Enter your Name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startBtn" onClick={handleClick}>Start</button>
    </div>
  );
};
