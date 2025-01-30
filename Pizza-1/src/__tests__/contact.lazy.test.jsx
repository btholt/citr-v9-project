import { expect, test, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";
import { render } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";

const client = new QueryClient();

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("can submit form", async () => {
  fetchMocker.mockResponse(JSON.stringify({ status: "ok" }));
  const screen = render(
    <QueryClientProvider client={client}>
      <Route.options.component />
    </QueryClientProvider>,
  );

  const tesData = {
    name: "dheeraj",
    email: "abc.efg@hij.com",
    message: "hello world",
  };

  const name = screen.getByPlaceholderText("Name");
  const email = screen.getByPlaceholderText("Email");
  const message = screen.getByPlaceholderText("Message");

  name.value = tesData.name;
  email.value = tesData.email;
  message.value = tesData.message;

  const btn = screen.getByRole("button");
  btn.click();

  const submitText = await screen.findByRole("heading", { level: 3 });

  expect(submitText.innerText).toContain("Submitted!");

  const requests = fetchMocker.requests();

  expect(requests).toHaveLength(1);
  expect(requests[0].url).toBe("/api/contact");
  expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
    body: JSON.stringify(tesData),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
});
