import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (action !== "POP") {
        window.scrollTo(0, 0);
        console.log("Done");
      }
    });
    return () => unlisten();
  }, []);
  return null;
};

export default ScrollToTop;
