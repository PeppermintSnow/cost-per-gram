import { PlusIcon, MinusIcon, ArrowPathIcon } from "@heroicons/react/16/solid";
import { TableDataType } from "@/types";
import { createNewRow } from "@/utils";

interface Props {
  tableData: TableDataType[];
  setTableData: React.Dispatch<React.SetStateAction<TableDataType[]>>;
}

const UserTableControls: React.FC<Props> = ({ tableData, setTableData }) => {

  const handleControl = (type: "add" | "subtract" | "reset"): void => {
    switch (type) {
      case "add":
        setTableData((prev) => [...prev, createNewRow()]);
        break;
      case "subtract":
        if (tableData.length > 1) setTableData((prev) => prev.slice(0, -1));
        break;
      default:
        setTableData([createNewRow()]);
        break;
    }
  }

  return (
    <>
      <div className="
        [&>button]:w-[50]
        [&>button]:h-[50]
        [&>button]:rounded-t-xl
        [&>button]:mx-2
        [&>button]:-mb-4
        [&>button]:cursor-pointer
        [&>button]:transition
        [&>button]:active:translate-y-3
        flex
        text-white
        z-0
      ">
        <button 
          onClick={() => handleControl('reset')}
          className="bg-red-600 hover:bg-red-500"
        >
          <ArrowPathIcon />
        </button>
        <button
          onClick={() => handleControl('subtract')}
          className="bg-yellow-500 hover:bg-yellow-400"
        >
          <MinusIcon />
        </button>
        <button
          onClick={() => handleControl('add')}
          className="bg-green-600 hover:bg-green-500"
        >
          <PlusIcon />
        </button>
      </div>
    </>
  );
}

export default UserTableControls;
