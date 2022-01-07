export const formatMoney = (money = 0) => {
  const formatter = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: money % 100 == 0 ? 0 : 2,
  });
  return formatter.format(money / 100);
};
