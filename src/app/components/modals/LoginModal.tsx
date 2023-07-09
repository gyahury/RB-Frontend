"use client";

import axios from "axios";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axiosInterceptors from "@/app/utils/axiosInterceptors";
import useUserMenu from "@/app/hooks/useUserMenu";
import useUserStore from "@/app/hooks/useUserStore";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const userMenu = useUserMenu();
  const setUser = useUserStore(state => state.setUser);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const updateUserInfo = async () => {
    const response = await axiosInterceptors.get(`/api/users/profile`);
    setUser(response.data.data);
    console.log("들어왔니", useUserStore.getState().user);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axiosInterceptors
      .post(`/api/users/login`, data)
      .then(response => {

        updateUserInfo();

        toast.success("로그인에 성공했습니다.");
        reset();
        router.refresh();
        userMenu.toggle();
        loginModal.onClose();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="" subtitle="" />
      <Input
        id="email"
        label="이메일"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="비밀번호"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline label="구글 로그인" icon={FcGoogle} onClick={() => {}} />
      <Button
        outline
        label="카카오 로그인"
        icon={RiKakaoTalkFill}
        onClick={() => {}}
      />
      <Button outline label="네이버 로그인" icon={SiNaver} onClick={() => {}} />
      <div className="text-neutral-500 text-center mt-3 ml-2 font-light">
        <div className="flex flex-row items-center gap-2">
          <div>처음이신가요 ?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={loginModal.onClose}
          >
            회원가입
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="로그인"
      actionLabel="로그인"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
