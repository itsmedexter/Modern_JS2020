// SORT



const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const badSort = prices.sort();
const ascSort = prices.sort((a, b) => a - b);
const decSort = prices.sort((a, b) => b - a);