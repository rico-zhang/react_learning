import React, { useState, useEffect, useRef, useCallback } from "react";
import usePromt from "./usePromt";

export default function Page2(props) {
  const [value, setValue] = useState("");
  usePromt(value, props.history);
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          // handleBlock(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
