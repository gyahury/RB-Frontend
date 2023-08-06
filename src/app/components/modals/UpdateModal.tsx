"use client";

import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axiosInterceptors from "@/app/utils/axiosInterceptors";
import useUpdateModal from "@/app/hooks/useUpdateModal";
import Select from "../selectbox/Select";

const UpdateModal = () => {
  const router = useRouter();
  const updateModal = useUpdateModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      role: ""
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    alert(JSON.stringify(data));

    axiosInterceptors
      .put(`/api/users/profile`, data)
      .then(response => {
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
        id="name"
        label="이름"
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
