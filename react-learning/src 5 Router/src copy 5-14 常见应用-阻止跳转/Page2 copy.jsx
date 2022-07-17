import React, { useState, useEffect, useRef, useCallback } from "react";

export default function Page2(props) {
  const [value, setValue] = useState("");
  const unBlockRef = useRef(null);

  const handleBlock = (value) => {
    if (value === "") {
      unBlockRef.current?.();
    } else {
      unBlockRef.current = props.history.block("确定要离开吗");
    }
  };
  useEffect(() => {
    handleBlock(value);
    return () => {
      unBlockRef.current?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

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
