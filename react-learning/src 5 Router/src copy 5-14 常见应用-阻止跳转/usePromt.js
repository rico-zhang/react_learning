import { useEffect, useRef } from "react";

export default function usePromt(value, history) {
  const unBlockRef = useRef(null);

  const handleBlock = (value) => {
    if (value === "") {
      unBlockRef.current?.();
    } else {
      unBlockRef.current = history.block("确定要离开吗");
    }
  };
  useEffect(() => {
    handleBlock(value);
    return () => {
      unBlockRef.current?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
}
