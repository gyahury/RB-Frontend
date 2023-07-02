"use client";

import { signIn } from "next-auth/react";
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

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // next-auth 로그인 기본경로 /api/auth/callback/credentials 

    // signIn("credentials", {
    //   ...data,
    //   redirect: false,
    // }).then((callback) => {
    //   setIsLoading(false);

    //   if (callback?.ok) {
    //     toast.success("로그인되었습니다.");
    //     router.refresh();
    //     loginModal.onClose();
    //   }

    //   if (callback?.error) {
    //     toast.error(callback.error);
    //   }
    // });
    
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
          <div>이미 계정이 있으신가요?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={loginModal.onClose}
          >
            로그인
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
