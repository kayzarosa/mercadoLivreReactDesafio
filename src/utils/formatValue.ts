const formatValue = (
  value: number,
  format: string,
  currency: string,
  maximumFractionDigits: number
): string =>
  Intl.NumberFormat(format, {
    style: "currency",
    currency,
    maximumFractionDigits,
  }).format(value);

export default formatValue;
