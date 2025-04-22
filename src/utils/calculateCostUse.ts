export const calculateCostUse = (
  cost: number,
  weight: number,
  used: number
): number => {
  return cost / weight * used;
}
