import { useState } from "react";
import Pizza from "./Pizza";

export default function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("medium");
  return (
    <div className="order">
      <form>
        <div>
          <label htmlFor="pizza-type">Pizza Type</label>
          <select
            onChange={(e) => setPizzaType(e.target.value)}
            name="pizza-type"
            value={pizzaType}
          >
            <option value="pepperoni">The Pepperoni Pizza</option>
            <option value="hawaiian">The Hawaiian Pizza</option>
            <option value="big_meat">The Big Meat Pizza</option>
          </select>
        </div>
        <div>
          <label htmlFor="pizza-size">Pizza Type</label>
          <div onChange={(e) => setPizzaSize(e.target.value)}>
            <input
              checked={pizzaSize === "small"}
              type="radio"
              name="pizza-size"
              value="small"
            />
            <label>Small</label>
            <input
              checked={pizzaSize === "medium"}
              type="radio"
              name="pizza-size"
              value="medium"
            />
            <label>Medium</label>
            <input
              checked={pizzaSize === "large"}
              type="radio"
              name="pizza-size"
              value="large"
            />
            <label>Large</label>
          </div>
        </div>
        <Pizza
          name="Pepperoni"
          description="Mozzarella Cheese, Pepperoni"
          image="/public/pizzas/pepperoni.webp"
        />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}
