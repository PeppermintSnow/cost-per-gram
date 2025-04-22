import { TableDataType } from "@/types";

export const createNewRow = (id: number): TableDataType => ({
  ingredient: "",
  type: "",
  cost: 0,
  rawWeight: 0,
  wUnit: "g",
  weight: 0,
  rawUsed: 0,
  uUnit: "g",
  used: 0,
  costUse: ""
});

