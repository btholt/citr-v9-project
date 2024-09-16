import { useState, useEffect } from "react";
import Pizza from "./Pizza";

// feel free to change en-US / USD to your locale
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    price = intl.format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : ""
    );
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  async function fetchPizzaTypes() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const pizzasRes = await fetch("/api/pizzas");
    const pizzasJson = await pizzasRes.json();
    setPizzaTypes(pizzasJson);
    setLoading(false);
  }

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
            {pizzaTypes.map((pizza) => (
              <option value={pizza.id}>{pizza.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pizza-size">Pizza Type</label>
          <div onChange={(e) => setPizzaSize(e.target.value)}>
            <input
              checked={pizzaSize === "S"}
              type="radio"
              name="pizza-size"
              value="S"
            />
            <label>Small</label>
            <input
              checked={pizzaSize === "M"}
              type="radio"
              name="pizza-size"
              value="M"
            />
            <label>Medium</label>
            <input
              checked={pizzaSize === "L"}
              type="radio"
              name="pizza-size"
              value="L"
            />
            <label>Large</label>
          </div>
        </div>
        {loading ? (
          <h3>LOADING …</h3>
        ) : (
          <>
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
            <button type="submit">Add to Cart</button>
          </>
        )}
      </form>
    </div>
  );
}
