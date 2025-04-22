import { UserTableHeadersType } from "@/types";

interface Props {
  headers?: { name: string, yield: number },
  setHeaders?: React.Dispatch<React.SetStateAction<UserTableHeadersType>>
}

const UserTableHeader: React.FC<Props> = ({ headers, setHeaders }) => {
  return (
    <div className="flex justify-center items-center bg-gray-800 p-3 rounded-xl rounded-b-none w-fit gap-5">
      <input 
        className="bg-gray-700 px-3 py-2 rounded-xl text-white"
        placeholder="Recipe name"
        type="text"
      />
      <input 
        className="bg-gray-700 px-3 py-2 rounded-xl text-white"
        placeholder="Recipe yield"
        type="number"
      />
      <button className="text-gray-400 text-3xl font-bold rounded-full ring-2 h-[32] w-[32] text-center hover:text-purple-100 transition">
        ?
      </button>
    </div>
  );
}

export default UserTableHeader;
