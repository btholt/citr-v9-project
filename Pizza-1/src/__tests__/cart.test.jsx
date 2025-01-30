import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Cart from "../cart";

test("snapshot with nothing in cart test", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});
