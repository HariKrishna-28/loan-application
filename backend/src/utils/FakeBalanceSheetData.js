function generateFakeData(length = 5) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const data = [];

  for (let i = 0; i < length; i++) {
    const year = currentYear;
    const month = currentDate.getMonth() + 1;
    const profitOrLoss = Math.floor(Math.random() * 200000) - 100000; // Random profit/loss between -100,000 and 100,000
    const assetsValue = Math.floor(Math.random() * 100000) + 1000; // Random assets value between 1,000 and 100,000

    data.push({ year, month, profitOrLoss, assetsValue });

    // Decrement the month for the next iteration
    currentDate.setMonth(currentDate.getMonth() - 1);
  }

  return data;
}

module.exports = generateFakeData;
