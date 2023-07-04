"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SelectProps {
  id: string;
  label: string;
  selectOne: string;
  selectOneValue: string;
  selectTwo?: string;
  selectTwoValue?: string;
  selectThree?: string;
  selectThreeValue?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  selectOne,
  selectOneValue,
  selectTwo,
  selectTwoValue,
  selectThree,
  selectThreeValue,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <select
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`w-full p-4 font-light bg-white border-2 transition rounded-md outline-none disabled:opacity-70 disabled:cursor-not-allowed focus:ring-blue-500 
            ${
              errors[id] ? "border-rose-500 text-rose-500" : "border-zinc-500 'text-zinc-400"
            }
            ${errors[id] ? "focus:border-rose-500" : "focus:border-blue-500"}
            `}
      >
        <option value="" selected>{label}</option>
        {selectOne && <option value={selectOneValue}>{selectOne}</option>}
        {selectTwo && <option value={selectTwoValue}>{selectTwo}</option>}
        {selectThree && <option value={selectThreeValue}>{selectThree}</option>}
      </select>
    </div>
  );
};

export default Select;
