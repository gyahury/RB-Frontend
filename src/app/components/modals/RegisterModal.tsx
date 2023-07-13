"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { toast } from "react-hot-toast";
import Select from "../selectbox/Select";
import axiosInterceptors from "@/app/utils/axiosInterceptors";
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      role: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    
    axiosInterceptors
      .post(`/api/users/create-account`, data)
      .then((response) => {
        toast.success("회원가입에 성공했습니다.");
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    reset();
  };

  const loginRegisterToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="환영합니다" subtitle="계정을 생성해보세요." />
      <Input
        id="email"
        label="이메일"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="이름"
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
      <Select
        id="role"
        label="권한"
        selectOne="사용자"
        selectOneValue="User"
        selectTwo="공인중개사"
        selectTwoValue="Realtor"
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
            onClick={loginRegisterToggle}
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
      isOpen={registerModal.isOpen}
      title="회원가입"
      actionLabel="가입"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
