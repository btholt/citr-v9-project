export default async function getPastOrders(page) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/api/past-orders?page=${page}`);
  const data = await response.json();
  return data;
}
