import _ from "lodash";

export const getRankingData = async () => {
  const response = await fetch(
    "http://ec2-3-8-126-0.eu-west-2.compute.amazonaws.com/api/ranking"
  );
  const rawRanking = await response.json();
  const ranking = rawRanking.players.map(r =>
    _.values({ ...r, capital: `${r.capital}€` })
  );

  return ranking;
};

export const getSeriesData = async () => {
  const seriesResponse = await fetch(
    "http://ec2-3-8-126-0.eu-west-2.compute.amazonaws.com/api/series/all"
  );
  const rawSeries = await seriesResponse.json();
  const series = rawSeries.map(s => ({
    name: s.name,
    data: _.unzip([s.timestamps, s.values])
  }));

  return series;
};

export const getMyData = async () => {
  const balanceResponse = await fetch(
    "http://ec2-3-8-126-0.eu-west-2.compute.amazonaws.com/api/me",
    {
      headers: {
        token: getToken()
      }
    }
  );
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
  const response = await fetch(
    `http://ec2-3-8-126-0.eu-west-2.compute.amazonaws.com/api/${coin}/orders`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: getToken()
      },
      body: order
    }
  );
  if (response.status === 200) {
    alert("Les ordres ont bien été envoyés");
  } else {
    alert("Les ordres n'ont pas pu être envoyés");
  }
};

export const getToken = () => {
  return "f5768147-fae0-4fdb-8da1-281dfbde1a50";
};
