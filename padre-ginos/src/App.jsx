import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <>
      <h1>Padre Gino's</h1>
      <Pizza
        name="Pepperoni"
        description="Classic tomato base, mozzarella, and spicy pepperoni slices."
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Margherita"
        description="Fresh tomatoes, mozzarella, basil, and a drizzle of olive oil."
      />
      <Pizza
        name="BBQ Chicken"
        description="Grilled chicken, BBQ sauce, red onions, and smoked gouda."
      />
      <Pizza
        name="Veggie Delight"
        description="Mushrooms, bell peppers, olives, onions, and mozzarella."
      />
      <Pizza
        name="Hawaiian"
        description="Sweet pineapple, ham, mozzarella, and tomato sauce."
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Meat Lovers"
        description="Pepperoni, sausage, bacon, ham, and extra cheese."
      />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
