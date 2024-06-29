function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currencySelectBudget.value,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Handle negative numbers explicitly to ensure minus sign is shown
  if (amount < 0) {
    return `-${formatter.format(Math.abs(amount))}`;
  } else {
    return formatter.format(amount);
  }
}
