import React, { useState } from "react";
import { Prompt } from "react-router-dom";
export default function Page2(props) {
  const [value, setValue] = useState("");
  return (
    <div>
      <Prompt when={value !== ""} message="确定要离开吗" />
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
