import _ from "lodash";

export const getRankingData = async () => {
  const response = await fetch("http://localhost:8000/ranking");
  const ranking = await response.json();

  return ranking;
};

export const getSeriesData = async () => {
  const seriesResponse = await fetch("http://localhost:8000/series");
  const rawSeries = await seriesResponse.json();
  const series = rawSeries.map(s => ({
    name: s.name,
    data: _.unzip([s.timestamps, s.values])
  }));

  return series;
};

export const getMyData = async () => {
  const balanceResponse = await fetch("http://localhost:8000/me");
  const me = await balanceResponse.json();

  return me;
};

export const isCorrectOrderType = order => {
  return order.type === "BUY" || order.type === "SELL";
};

export const isCorrectOrderTimestamp = order => {
  const date = new Date(order.timestamp);
  return date instanceof Date && !isNaN(date);
};

export const isCorrectAmount = order => {
  return order.amount >= 0;
};

export const areValidOrders = input => {
  try {
    const parsed = JSON.parse(input);
    if (!parsed.orders || !Array.isArray(parsed.orders)) {
      return false;
    }
    return _.every(parsed.orders, order => {
      return (
        isCorrectOrderType(order) &&
        isCorrectOrderTimestamp(order) &&
        isCorrectAmount(order)
      );
    });
  } catch (e) {
    return false;
  }
};

export const sendOrders = async (coin, order) => {
  const response = await fetch(`http://localhost:8000/${coin}/orders`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: getToken()
    },
    body: order
  });
  if (response.status === 200) {
    alert("Les ordres ont bien été envoyés");
  } else {
    alert("Les ordres n'ont pas pu être envoyés");
  }
};

export const getToken = () => {
  return "";
};
