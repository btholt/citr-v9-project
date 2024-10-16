import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../src/Pizza";

test("alt text renders on image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );

  const img = await screen.getByRole("img");

  expect.element(img).toBeInTheDocument();
  expect.element(img).toHaveAttribute("src", src);
  expect.element(img).toHaveAttribute("alt", name);
});
