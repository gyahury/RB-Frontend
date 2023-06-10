"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm text-gray-600 py-3 px-5 rounded-full hover:bg-neutral-100 transition cursor-pointer border-b-[1px]"
          onClick={() => {}}
        >
          부동산 매물을 확인해보세요 !
        </div>
        <div className="p-4 md:py-2 md:px-3 border-[1px] border neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition text-gray-600">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
