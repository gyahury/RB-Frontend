'use client'

import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div className="border-[1px] py-2 w-full md:w-auto rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm text-gray-600 px-6">장소</div>
        <div className="hidden sm:block text-sm text-gray-600 sm-block px-6 border-x-[1px] text-center flex-1">
          위치
        </div>
        <div className="text-sm text-gray-600 pl-6 pr-2 flex flex-row items-center gap-3">
          <div className="hidden sm:block">인원</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size='18' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
