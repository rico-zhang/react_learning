import React, { useEffect } from "react";

export default function useScroll(location) {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollLeft = 0;
  }, [location.pathname]);
}
