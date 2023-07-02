"use client";

import axios from "axios";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { toast } from "react-hot-toast";

const Navbar = () => {
  
  const onTest = () => {
    toast(`호출 API 주소  ${process.env.NEXT_PUBLIC_API_URL} /api/users/test1`)
    const a = axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/test1`)
      .then(() => {
        console.log(a);
        toast.success("test 통신 성공");
      })
      .catch((error) => {
        console.log(error);
        toast.error("통신 오류가 발생했습니다.");
      })
      .finally(() => {
      });
  }
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-1 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <button className="relative px-3 py-2 rounded-lg hover:opacity-80 transition bg-rose-500 text-white"
              onClick={onTest}
            >
              API 테스트 버튼
            </button>
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
