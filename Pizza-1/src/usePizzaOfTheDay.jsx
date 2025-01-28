import { useEffect, useState } from "react";

export function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function getPizzaOfTheDay() {
      const pizza = await fetch("/api/pizza-of-the-day");
      const data = await pizza.json();
      setPizzaOfTheDay(data);
    }
    getPizzaOfTheDay();
  }, []);
  return pizzaOfTheDay;
}
