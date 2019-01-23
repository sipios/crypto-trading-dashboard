import _ from "lodash";

const baseUrl = "http://ec2-3-8-126-0.eu-west-2.compute.amazonaws.com";

/**
 * Call the /api/ranking route
 */
export const getRankingData = async () => {
  // TODO
  const response = await fetch("");
  const rawRanking = await response.json();
  const ranking = rawRanking.players.map(r =>
    _.values({ ...r, capital: `${r.capital}€` })
  );

  return ranking;
};

/**
 * Call the /api/series/all route
 */
export const getSeriesData = async () => {
  // TODO
  const seriesResponse = await fetch("");
  const rawSeries = await seriesResponse.json();
  const series = rawSeries.map(s => ({
    name: s.name,
    data: _.unzip([s.timestamps, s.values])
  }));

  return series;
};

/**
 * Call the /api/me route
 * It requires a the token in a token header
 */
export const getMyData = async () => {
  const balanceResponse = await fetch("");
  const me = await balanceResponse.json();

  return me;
};

// The order type should be either BUY or SELL
export const isCorrectOrderType = order => {
  // TODO
  return false;
};

export const isCorrectOrderTimestamp = order => {
  const date = new Date(order.timestamp);
  return date instanceof Date && !isNaN(date);
};

// The order amount should be greater or equal than 0
export const isCorrectAmount = order => {
  // TODO
  return false;
};

// Call the three checks functions defined above on every order
export const areValidOrders = input => {
  try {
    const parsed = JSON.parse(input);
    if (!parsed.orders || !Array.isArray(parsed.orders)) {
      return false;
    }
    // TODO : Replace the false with the actual check
    return _.every(parsed.orders, order => {
      return false;
    });
  } catch (e) {
    return false;
  }
};

// Call the /api/${coin}/orders route
// It should be a POST request
// The headers should be
// Accept: application/json
// Content-Type: application/json
// token: the token
export const sendOrders = async (coin, order) => {
  const response = await fetch("");
  if (response.status === 200) {
    alert("Les ordres ont bien été envoyés");
  } else {
    alert("Les ordres n'ont pas pu être envoyés");
  }
};

export const getToken = () => {
  // TODO : Write token once given by the traders
  return "";
};
