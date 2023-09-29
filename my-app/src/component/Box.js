import React, { useState } from "react";

export default function Box(props) {
  const [on, setOn] = useState(props.on); // Use destructuring to extract useState

  const style = {
    backgroundColor: on ? "black" : "transparent" // Use 'on' instead of 'props.on'
  };

  function toggle() {
    setOn(prevOn => !prevOn); // Correct the typo here: 'setOn' instead of 'seton'
  }

  return (
    <div style={style} className="box" onClick={toggle}></div>
  );
}
