import React from "react";
import Navigation from "./navigation";

const Container = (props) => {
  return (
    <div>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
