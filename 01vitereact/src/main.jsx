import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const addvariable = "helloji";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to vist google",
  addvariable
);

const anotherElemeent = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

createRoot(document.getElementById("root")).render(reactElement);
