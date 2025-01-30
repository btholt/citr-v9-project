import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../pizza";

afterEach(cleanup);

test("alt text on Pizza images", () => {
  const name = "Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="My Favourite Pizza" image={src} />,
  );
  const element = screen.getByRole("img");
  expect(element.src).toBe(src);
  expect(element.alt).toBe(name);
});

test("to have a default image if no image is provided", () => {
  const name = "Pizza";
  const screen = render(<Pizza name={name} description="My Favourite Pizza" />);
  const element = screen.getByRole("img");
  expect(element.src).not.toBe("");
});
