import { typeOptionsMap } from "@/utils"
/**
 * Converts value to grams
 */
export const standardizeUnit = (
  value: number,
  unit: string,
  type: string,
): number  => {
  const density = findDensity(type);
  switch (unit) {
    case "g":
      return value;
    case "kg":
      return value * 1000;
    case "ml":
      return value * density;
    case "l":
      return (value / 1000) * density;
    case "cup":
      return value * 236.5882 * density;
    case "tbsp":
      return value * 14.7868 * density;
    case "tsp":
      return value * (4.9289 * density);
  }
  return 0;
}

const findDensity = (type: string): number => {
  for (const group of typeOptionsMap) {
    const option = group.options.find((option) => option.value === type);
    if (option) return option.density;
  }
  return 1;
}
