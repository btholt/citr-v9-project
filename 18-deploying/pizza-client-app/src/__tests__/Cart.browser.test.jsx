import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";

test("snapshot with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot with some stuff in cart", () => {
  const { asFragment } = render(
    <Cart
      cart={[
        {
          pizza: {
            id: "pepperoni",
            name: "The Pepperoni Pizza",
            category: "Classic",
            description: "Mozzarella Cheese, Pepperoni",
            image: "/public/pizzas/pepperoni.webp",
            sizes: {
              S: 9.75,
              M: 12.5,
              L: 15.25,
            },
          },
          size: "M",
          price: "$12.50",
        },
        {
          pizza: {
            id: "ckn_pesto",
            name: "The Chicken Pesto Pizza",
            category: "Chicken",
            description:
              "Chicken, Tomatoes, Red Peppers, Spinach, Garlic, Pesto Sauce",
            image: "/public/pizzas/ckn_pesto.webp",
            sizes: {
              S: 12.75,
              M: 16.75,
              L: 20.75,
            },
          },
          size: "L",
          price: "$20.75",
        },
        {
          pizza: {
            id: "bbq_ckn",
            name: "The Barbecue Chicken Pizza",
            category: "Chicken",
            description:
              "Barbecued Chicken, Red Peppers, Green Peppers, Tomatoes, Red Onions, Barbecue Sauce",
            image: "/public/pizzas/bbq_ckn.webp",
            sizes: {
              S: 12.75,
              M: 16.75,
              L: 20.75,
            },
          },
          size: "S",
          price: "$12.75",
        },
      ]}
    />,
  );
  expect(asFragment()).toMatchSnapshot();
});
