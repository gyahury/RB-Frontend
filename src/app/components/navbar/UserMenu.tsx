"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback } from "react";
import MenuItems from "./MenuItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useUserStore from "@/app/hooks/useUserStore";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useUserMenu from "@/app/hooks/useUserMenu";
import useUpdateModal from "@/app/hooks/useUpdateModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const updateModal = useUpdateModal();
  const userMenu = useUserMenu();
  const isOpen = userMenu.isOpen;
  const currentUser = useUserStore.getState().user;
  const setUser = useUserStore(state => state.setUser);
  const router = useRouter();

  const actionOpen = useCallback(() => {
    userMenu.toggle();
  }, []);
  
  const logout = () => {
    Cookies.remove("access-token");
    setUser(null);

    router.refresh();
    actionOpen();
    toast.success("로그아웃되었습니다.")
  }

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
            { currentUser ? (
              <>
                <MenuItems 
                  onClick={() => {}}
                  subMenuName="찜 목록"
                />
                <MenuItems 
                  onClick={updateModal.onOpen}
                  subMenuName="나의정보 수정"
                />
                <MenuItems 
                  onClick={logout}
                  subMenuName="로그아웃"
                />
              </>
            ) :
              <>
                <MenuItems 
                  onClick={loginModal.onOpen}
                  subMenuName="로그인"
                />
                <MenuItems 
                  onClick={registerModal.onOpen}
                  subMenuName="회원가입"
                />
              </>
            }
            
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
