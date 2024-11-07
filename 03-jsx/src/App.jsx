import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <Pizza
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
        image={"/public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
