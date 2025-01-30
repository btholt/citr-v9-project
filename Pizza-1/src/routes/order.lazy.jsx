import { useContext, useEffect, useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Pizza from "../pizza";
import Cart from "../cart";
import { CartContext } from "../contexts";

export const Route = createLazyFileRoute("/order")({
  component: Order,
});

const intl = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);

  async function checkout() {
    setLoading(true);
    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    setLoading(false);
    setCart([]);
  }

  let prices, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    prices = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    const pizzaTypes = await fetch("/api/pizzas");
    const pizzaTypeJson = await pizzaTypes.json();
    setPizzaTypes(pizzaTypeJson);
    setLoading(false);
  }

  function addToCart() {
    setCart((prev) => {
      return [
        ...prev,
        { pizza: selectedPizza, size: pizzaSize, price: prices },
      ];
    });
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form action={addToCart}>
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                onChange={(e) => setPizzaType(e.target.value)}
                name="pizza-type"
                title="pizza-type"
                value={pizzaType}
              >
                {pizzaTypes.map((pizza) => (
                  <option value={pizza.id} key={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input
                    checked={pizzaSize === "S"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "M"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "L"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                    type="radio"
                    name="pizza-size"
                    value="L"
                    id="pizza-l"
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
          {loading ? (
            <h3>Loadin...</h3>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza.id}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>{prices}</p>
            </div>
          )}
        </form>
      </div>
      {loading ? <h2>LOADING …</h2> : <Cart cart={cart} checkout={checkout} />}
    </div>
  );
}
