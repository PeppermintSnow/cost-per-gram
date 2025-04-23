import { useState } from "react";
import { RowDivider } from "@/components/userTable";
import { TableDataType, SummaryRowType, UnitsType } from "@/types";
import { convertUnit } from "@/utils";
interface Props {
  tableData: TableDataType[];
 // setTableData: React.Dispatch<React.SetStateAction<TableDataType[]>>;
}

const typeOptions: UnitsType[] = [
  {text: 'Total', value: 'total'},
];

const unitOptions: UnitsType[] = [
  {text: 'kg', value: 'kg'},
  {text: 'g', value: 'g'},
];

const UserTableFooter: React.FC<Props> = ({ tableData }) => {
  const [summaryInput, setSummaryInput] = useState<SummaryRowType>({
    type: "total",
    wUnit: "kg",
    uUnit: "kg"
  });

  const handleInput = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setSummaryInput({...summaryInput, [name]: value});
    console.log(summaryInput);
  }

  return (
    <>
      <RowDivider />
      <tr className="
        [&>td>*]:bg-purple-600
        [&>td>*]:px-3
        [&>td>*]:py-2
        [&>td>*]:rounded-xl
        [&>td>*]:focus:outline-none
        [&>td>*]:focus:ring-2
        [&>td>*]:focus:ring-purple-300
        [&>td>*]:transition
        [&>td]:p-3
        [&>td>div]:focus-within:ring-2
        [&>td>div]:focus-within:ring-purple-300
        [&>td>div]:transition
        text-center
        text-white
        font-bold
        "
      >
        <td>
          {tableData.length} Ingredients
        </td>
        <td>
          <select
            name="type"
            onChange={(e) => handleInput(e)}
          >
            {typeOptions.map((option: UnitsType) => {
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
        </td>
        <td>
          {tableData.reduce((total, row) => total + row.cost, 0).toFixed(2)}
        </td>
        <td>
          <div className="flex justify-between">
            <input 
              value={convertUnit(
                tableData.reduce((total, row) => total + row.weight, 0),
                summaryInput.wUnit
              ).toFixed(2)}
              disabled
              className="w-20 overflow-auto"
            />
            <select
              name="wUnit"
              onChange={(e) => handleInput(e)}
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
              value={convertUnit(
                tableData.reduce((total, row) => total + row.used, 0),
                summaryInput.uUnit
              ).toFixed(2)}
              disabled
              className="w-20 overflow-auto me-1"

            />
            <select
              name="uUnit"
              onChange={(e) => handleInput(e)}
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
          {tableData.reduce((total, row) => total + (row.costUse || 0), 0).toFixed(2)}
        </td>
      </tr>
    </>
  );
}

export default UserTableFooter;
