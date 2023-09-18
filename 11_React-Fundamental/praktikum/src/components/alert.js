import { createElement } from "react";

// this might be affected if we tried to dynamically change the style of display maybe?
function Alert({ id, children }) {
  return createElement(
    "div",
    {
      id,
      className: "alert alert-danger w-75 mx-2",
      style: { display: "none" },
    },
    children
  );
}

export default Alert;
