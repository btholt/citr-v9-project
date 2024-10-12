import React from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import Pizza from "./Pizza";

const App = () => {
  const [pizzaType, setPizzaType] = React.useState("pepperoni");
  const [pizzaSize, setPizzaSize] = React.useState("small");

  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <Order />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
