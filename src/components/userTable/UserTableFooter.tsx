import { useState } from "react";
import { RowDivider } from "@/components/userTable";
import { TableDataType, SummaryRowType, OptionsType } from "@/types";
import { convertUnit } from "@/utils";
interface Props {
  tableData: TableDataType[];
  setTableData: React.Dispatch<React.SetStateAction<TableDataType[]>>;
}

const typeOptions: OptionsType[] = [
  {text: 'Total', value: 'total'},
];

const unitOptions: OptionsType[] = [
  {text: 'kg', value: 'kg'},
  {text: 'g', value: 'g'},
];

const UserTableFooter: React.FC<Props> = ({ tableData, setTableData }) => {
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
        [&>td]:p-3 
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
            {typeOptions.map((option) => {
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
          {convertUnit(
            tableData.reduce((total, row) => total + row.weight, 0),
            summaryInput.wUnit
          ).toFixed(2)}
        </td>
        <td>
          <select
            name="wUnit"
            onChange={(e) => handleInput(e)}
          >
            {unitOptions.map((option) => {
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
          {convertUnit(
            tableData.reduce((total, row) => total + row.used, 0),
            summaryInput.uUnit
          ).toFixed(2)}
        </td>
        <td>
          <select
            name="uUnit"
            onChange={(e) => handleInput(e)}
          >
            {unitOptions.map((option) => {
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
          {tableData.reduce((total, row) => total + (row.costUse || 0), 0).toFixed(2)}
        </td>
      </tr>
    </>
  );
}

export default UserTableFooter;
