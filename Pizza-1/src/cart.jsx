const intl = new Intl.NumberFormat("en-In", {
  style: "currency",
  currency: "INR", // feel free to change to your local currency
});

export default function Cart({ cart, checkout }) {
  const total = cart.reduce((a, b) => a + b.pizza.sizes[b.size], 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> –
            <span className="type">{item.pizza.name}</span> –
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
