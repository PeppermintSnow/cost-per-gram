import React from "react";
import { TableDataType, UnitsType, TypeOptionsMapType, OptionsType } from "@/types";
import { standardizeUnit, typeOptionsMap, calculateCostUse } from "@/utils";

interface Props {
  tableData: TableDataType[];
  setTableData: React.Dispatch<React.SetStateAction<TableDataType[]>>;
}

const unitOptions: UnitsType[] = [
  {text: 'g', value: 'g'},
  {text: 'kg', value: 'kg'},
  {text: 'ml', value: 'ml'},
  {text: 'l', value: 'l'},
  {text: 'cup', value: 'cup'},
  {text: 'tbsp', value: 'tbsp'},
  {text: 'tsp', value: 'tsp'}
];

const UserTableBody: React.FC<Props> = ({ tableData, setTableData }) => {

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    targetIndex: number
  ): void => {
    const name = e.target.name;
    const value = e.target.value;
    let numValue: number = parseFloat(value);

    if (['cost', 'rawWeight', 'rawUsed'].includes(name)) {
      if (isNaN(numValue)) numValue = 0;
    }

    setTableData((prev) => {
      return prev.map((row, index) => {
        if (index === targetIndex) { 
          let newValue;
          let newCostUse;
          switch (name) {
            case "cost":
              newCostUse = calculateCostUse(numValue, row.weight, row.used);
              if (newCostUse === Infinity) newCostUse = 0;
              return {...row, [name]: numValue, costUse: newCostUse}
            case "weight":
              newValue = standardizeUnit(numValue, row.wUnit, row.type);
              newCostUse = calculateCostUse(row.cost, newValue, row.used);
              if (newCostUse === Infinity) newCostUse = 0;
              return {
                ...row,
                rawWeight: numValue,
                [name]: newValue,
                costUse: newCostUse
              }
            case "used":
              newValue = standardizeUnit(numValue, row.uUnit, row.type);
              newCostUse = calculateCostUse(row.cost, row.weight, newValue);
              if (newCostUse === Infinity) newCostUse = 0;
              return {
                ...row,
                rawUsed: numValue,
                [name]: newValue,
                costUse: newCostUse
              }
            case "wUnit":
              newValue = standardizeUnit(row.rawWeight, value, row.type);
              newCostUse = calculateCostUse(row.cost, newValue, row.used);
              if (newCostUse === Infinity) newCostUse = 0;
              return {
                ...row,
                [name]: value,
                weight: newValue,
                costUse: newCostUse
              }
            case "uUnit":
              newValue = standardizeUnit(row.rawUsed, value, row.type);
              newCostUse = calculateCostUse(row.cost, row.weight, newValue);
              if (newCostUse === Infinity) newCostUse = 0;
              return {
                ...row,
                [name]: value,
                used: newValue,
                costUse: newCostUse
              }
          }
          return {...row, [name]: value};
        } else {
          return row;
        }
      });
    });
  }
  return (
    <>
      {tableData.map((_, row) => (
        <React.Fragment key={row}>
          <tr
            className="
              [&>td>*]:bg-purple-600
              [&>td>*]:px-3
              [&>td>*]:py-2
              [&>td>*]:rounded-xl
              [&>td>*]:focus:outline-none
              [&>td>div>*]:focus:outline-none
              [&>td>*]:focus:ring-2
              [&>td>*]:focus:ring-purple-300
              [&>td]:p-3
              [&>td>div]:focus-within:ring-2
              [&>td>div]:focus-within:ring-purple-300
              [&>td>*]:transition-all
              text-center
              text-white
            "
          >
            <td>
              <input
                name="ingredient"
                value={tableData[row]?.ingredient || ""}
                placeholder="Ingredient name"
                type="text"
                className="w-35"
                onChange={(e)=>handleInput(e, row)}
              />
            </td>
            <td>
              <select
                name="type"
                value={tableData[row]?.type || ""}
                onChange={(e)=>handleInput(e, row)}
              >
                <option value="">n/a</option>
                {typeOptionsMap.map((group: TypeOptionsMapType) => {
                  return (
                    <optgroup key={group.name} label={group.name}>
                      {group.options.map((option: OptionsType) => {
                        return (
                          <option key={option.value} value={option.value}>
                            {option.text}
                          </option>
                        );
                      })}
                    </optgroup>
                  );
                })}
              </select>
            </td>
            <td>
              <input 
                name="cost"
                value={tableData[row]?.cost || ""}
                type="number"
                placeholder="0.00"
                className="w-25"
                onChange={(e)=>handleInput(e, row)}
              />
            </td>
            <td>
              <div className="flex justify-between">
                <input 
                  name="weight"
                  value={tableData[row]?.rawWeight || ""}
                  type="number"
                  placeholder="0.00"
                  className="w-15"
                  onChange={(e)=>handleInput(e, row)}
                />
                <select
                  name="wUnit"
                  value={tableData[row]?.wUnit || ""}
                  onChange={(e)=>handleInput(e, row)}
                >
                  {unitOptions.map((option: UnitsType) => {
                    return (
                      <option 
                        key={option.value} 
                        value={option.value}
                      >
                        {option.text}
                      </option>
                    );
                  })}
                </select>
              </div>
            </td>
            <td>
              <div className="flex justify-between">
                <input
                  name="used"
                  value={tableData[row]?.rawUsed || ""}
                  type="number"
                  placeholder="0.00"
                  className="w-15"
                  onChange={(e)=>handleInput(e, row)}
                />
                <select
                  name="uUnit"
                  value={tableData[row]?.uUnit || ""}
                  onChange={(e)=>handleInput(e, row)}
                >
                  {unitOptions.map((option: UnitsType) => {
                    return (
                      <option 
                        key={option.value} 
                        value={option.value}
                      >
                        {option.text}
                      </option>
                    );
                  })}
                </select>
              </div>
            </td>
            <td className="font-bold text-purple-200">
              {tableData[row].costUse ? tableData[row].costUse.toFixed(2) : '...'}
            </td>
          </tr>
       </React.Fragment>
      ))}
    </>
  );
};

export default UserTableBody;
