import { createRoot } from "react-dom/client";
import Order from "./order";
import { StrictMode, useState } from "react";
import PizzaOfTheDay from "./pizzaOfTheDay";
import { CartContext } from "./contexts";
import Header from "./header";

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
