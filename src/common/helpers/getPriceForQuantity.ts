
export const unitPriceFormatStr = (
  unitPrice: number,
  unitsNumber: number,
): string => {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
};

export const priceFormatStr = (unitPrice: number): string => {
  return `$${unitPrice.toFixed(2)}`;
};

export const totalPriceFormatStr = (unitsNumber: number): string => {
  return `Total: $${(unitsNumber * 10).toFixed(2)}`;
};
