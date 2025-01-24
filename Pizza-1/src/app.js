import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pizza"),
    React.createElement(Pizza, {
      name: "P1",

      description: "A1 Pizza",
    }),
    React.createElement(Pizza, {
      name: "P2",
      description: "A2 Pizza",
    }),
    React.createElement(Pizza, {
      name: "P3",
      description: "A3 Pizza",
    }),
    React.createElement(Pizza, {
      name: "P4",
      description: "A4 Pizza",
    }),
    React.createElement(Pizza, {
      name: "P5",
      description: "A5 Pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
