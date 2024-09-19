import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

// feel free to change en-US / USD to your locale
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="pizza-of-the-day-info">
        <h2>Pizza of the Day</h2>
        <h3>{pizzaOfTheDay.name}</h3>
        <p>{pizzaOfTheDay.description}</p>
      </div>
      <img
        className="pizza-of-the-day-image"
        src={pizzaOfTheDay.image}
        alt={pizzaOfTheDay.name}
      />
      <p className="pizza-of-the-day-price">
        From: <span>{intl.format(pizzaOfTheDay.sizes.S)}</span>
      </p>
    </div>
  );
};

export default PizzaOfTheDay;
