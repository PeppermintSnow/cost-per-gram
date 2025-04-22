'use client';
import { useState } from "react";
import { 
  UserTableHeader,
  UserTableControls,
  UserTableColumns,
  UserTableBody,
  UserTableFooter
} from "@/components/userTable";
import { TableDataType } from "@/types";
import { createNewRow } from "@/utils";

const UserTable = (): JSX.Element => {
  const [tableData, setTableData] = useState<TableDataType[]>([createNewRow(1)]);
  
  const debug = () => {
    console.log(tableData);
  }
  return (
    <>
      <div className="flex flex-col justify-center my-5 mx-0 xl:m-5 overflow-x-auto">
        <div className="flex justify-between items-center">
          <UserTableHeader />
          <UserTableControls tableData={tableData} setTableData={setTableData} />
        </div>
        <table className="bg-purple-800 border-white rounded-xl rounded-ss-none z-99">
          <thead>
            <UserTableColumns />
          </thead>
          <tbody>
            <UserTableBody tableData={tableData} setTableData={setTableData}  />
          </tbody>
          <tfoot>
            <UserTableFooter tableData={tableData} setTableData={setTableData} />
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default UserTable;
