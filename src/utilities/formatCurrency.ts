const FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'CAD',
  style: 'currency',
});

export default function formatCurrency(price: number) {
  return FORMATTER.format(price);
}
