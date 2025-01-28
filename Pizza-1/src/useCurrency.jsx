const intl = new Intl.NumberFormat("en-In", {
  style: "currency",
  currency: "INR", // feel free to change to your local currency
});

export const priceConverter = (price) => intl.format(price);

export function useCurrency(price) {
  return priceConverter.format(price);
}
