import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PizzaOfTheDay from "../pizzaOfTheDay";
import Header from "../header";
import { CartContext } from "../contexts";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const cartHook = React.useState([]);

  return (
    <>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Outlet />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
