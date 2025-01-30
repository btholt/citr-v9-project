import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza1",
      description: "Some Cool Pizza1",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza2",
      description: "Some Cool Pizza2",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza3",
      description: "Some Cool Pizza3",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza4",
      description: "Some Cool Pizza4",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza5",
      description: "Some Cool Pizza5",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza6",
      description: "Some Cool Pizza6",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza7",
      description: "Some Cool Pizza7",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza8",
      description: "Some Cool Pizza8",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
