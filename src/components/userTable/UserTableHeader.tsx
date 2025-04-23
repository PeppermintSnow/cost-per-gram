import { UserTableHeadersType } from "@/types";

const UserTableHeader = (): JSX.Element => {
  return (
    <div className="
      flex justify-center items-center 
      bg-gray-800 p-3 rounded-xl 
      rounded-b-none w-fit gap-5 
      [&>*]:focus:outline-none 
      [&>*]:focus:ring-2 
      [&>*]:transition-all
      "
    >
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
