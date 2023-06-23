"use client";

import axios from "axios";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../components/Heading";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
        errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
        name: '',
        email: '',
        password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    // axios.post('/api/register', data)
    // .then(() => {
    //   registerModal.onClose();
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    // .finally(() => {
    //   setIsLoading(false);
    // })
   
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading 
        title="환영합니다"
        subtitle="계정을 생성해보세요."
        center
      />
    </div>
  )

  return (
    <Modal 
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="회원가입"
      actionLabel="가입"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}  
    />
  );
};

export default RegisterModal;
