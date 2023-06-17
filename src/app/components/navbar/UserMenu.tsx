"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItems from "./MenuItems";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actionOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm text-gray-600 py-3 px-5 rounded-full hover:bg-neutral-100 transition cursor-pointer border-b-[1px]"
        >
          부동산 매물을 확인해보세요 !
        </div>
        <div 
          onClick={actionOpen}
          className="p-4 md:py-2 md:px-3 border-[1px] border neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition text-gray-600">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden text-sm">
          <div className="flex flex-col cursor-pointer ">
            <MenuItems 
              onClick={() => {}}
              subMenuName="Login"
            />
          </div>
        </div>
      
      
      )}
    </div>
  );
};

export default UserMenu;
