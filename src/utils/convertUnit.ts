export const convertUnit = (value: number, unit: string): number => {
  // Assumes the value is in grams
  switch (unit) {
    case "g":
      return value;
    case "kg":
      return value / 1000;
  }
  return 0;
}
