"use client";
import { FaList } from "react-icons/fa";

const multiplyResult = () => {
  return (
    <div className="flex flex-col w-full border-2">
      <h1 className="text-xl mt-4 mb-2 mx-4">Materi(6791)</h1>
      <div className="grid grid-cols-1 mx-4 w-full">
        {/** //TODO
         * //* Map Search result API
         */}
        <div className="flex items-center gap-x-4 my-4">
          <span className="text-5xl">
            <FaList />
          </span>
          <div className="flex flex-col">
            <h3 className="font-medium text-lg px-2 mb-1">Title Materi</h3>
            <p className="border px-4 py-2 rounded-full text-sm bg-[#D9D9D9]">
              Label Subject
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default multiplyResult;
