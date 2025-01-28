export async function getPastOrder(order) {
  const res = await fetch(`/api/past-order/${order}`);
  const data = await res.json();
  return data;
}
