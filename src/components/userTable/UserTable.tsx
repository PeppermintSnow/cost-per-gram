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
  return (
    <>
      <div className="flex justify-center my-5">
        <div className="flex flex-col justify-center overflow-x-auto w-fit">
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
              <UserTableFooter tableData={tableData} />
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserTable;
