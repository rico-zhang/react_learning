import React, { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>
    </div>
  );
}
