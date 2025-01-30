import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getPastOrders } from "../api/getPastOrders";
import { getPastOrder } from "../api/getPastOrder";
import Modal from "../modal";
import { Suspense, use, useState } from "react";
import { priceConverter } from "../useCurrency";
import ErrorBoundary from "../errorBoundary";

export const Route = createLazyFileRoute("/past")({
  component: ErrorBoundaryPassThrough,
});

function ErrorBoundaryPassThrough(props) {
  const [page, setPage] = useState(1);
  const apiPromise = useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000,
  }).promise;
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="past-orders">
            <h2>Fetching Past Order</h2>
          </div>
        }
      >
        <PastOrdersRoute
          page={page}
          setPage={setPage}
          apiPromise={apiPromise}
          {...props}
        />
      </Suspense>
    </ErrorBoundary>
  );
}

function PastOrdersRoute({ page, setPage, apiPromise }) {
  const data = use(apiPromise);
  const [focusedOrder, setFocusedOrder] = useState(null);

  const { data: focusedOrderData, isLoading: isfocusedOrderLoading } = useQuery(
    {
      queryKey: ["past-order", focusedOrder],
      queryFn: () => getPastOrder(focusedOrder),
      staleTime: 24 * 60 * 60 * 1000,
      enabled: Boolean(focusedOrder),
    },
  );

  return (
    <div className="past-orders">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.order_id}>
              <td>
                <button onClick={() => setFocusedOrder(order.order_id)}>
                  {order.order_id}
                </button>
              </td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <div>{page}</div>
        <button disabled={data.length < 10} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      {focusedOrder ? (
        <Modal>
          <h2>Order #{focusedOrder}</h2>
          {!isfocusedOrderLoading ? (
            <table>
              <thead>
                <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Size</td>
                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {focusedOrderData.orderItems.map((pizza) => (
                  <tr key={`${pizza.pizzaTypeId}_${pizza.size}`}>
                    <td>
                      <img src={pizza.image} alt={pizza.name} />
                    </td>
                    <td>{pizza.name}</td>
                    <td>{pizza.size}</td>
                    <td>{pizza.quantity}</td>
                    <td>{priceConverter(pizza.price)}</td>
                    <td>{priceConverter(pizza.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading..</p>
          )}
          <button onClick={() => setFocusedOrder(null)}>Close </button>
        </Modal>
      ) : null}
    </div>
  );
}
