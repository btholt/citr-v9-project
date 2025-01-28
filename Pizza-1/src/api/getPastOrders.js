export async function getPastOrders(page) {
  const data = await fetch(`/api/past-orders?page=${page}`);
  const dataJson = await data.json();
  return dataJson;
}
