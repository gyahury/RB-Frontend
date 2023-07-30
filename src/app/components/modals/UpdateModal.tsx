"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axiosInterceptors from "@/app/utils/axiosInterceptors";
import useUserMenu from "@/app/hooks/useUserMenu";
import useUserStore from "@/app/hooks/useUserStore";
import Cookies from "js-cookie";
import useUpdateModal from "@/app/hooks/useUpdateModal";

const UpdateModal = () => {
  const router = useRouter();
  const updateModal = useUpdateModal();
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
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axiosInterceptors
      .post(`/api/users/profile`, data)
      .then(response => {
        Cookies.set("access-token", response.data.data);
        updateUserInfo();

        toast.success("수정에 성공했습니다.");
        reset();
        router.refresh();
        updateModal.onClose();
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


  return (
    <Modal
      disabled={isLoading}
      isOpen={updateModal.isOpen}
      title="나의정보 수정"
      actionLabel="나의정보 수정"
      onClose={updateModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default UpdateModal;
