import React, { useState } from "react";
import Promt from "./Promt";

export default function Page2(props) {
  const [value, setValue] = useState("");
  return (
    <div>
      <Promt when={value !== ""} message="确定要离开吗" />
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
