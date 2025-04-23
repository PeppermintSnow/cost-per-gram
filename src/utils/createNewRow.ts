import { TableDataType } from "@/types";

export const createNewRow = (): TableDataType => ({
  ingredient: "",
  type: "",
  cost: 0,
  rawWeight: 0,
  wUnit: "g",
  weight: 0,
  rawUsed: 0,
  uUnit: "g",
  used: 0,
  costUse: 0
});

