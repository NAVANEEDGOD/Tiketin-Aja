import React from "react";
import { DropDown } from "./DropDown";
import DatePicker from "./DatePicker";

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
    option?: string[];
}

export const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, icon ,option}) => {
    return (
        <div className="flex flex-col items-start w-full">
        <label className="text-gray-500 mb-1">{placeholder}</label>
        <div className="w-full flex items-center border border-gray-300 rounded-lg p-2">
            {icon && <span className="text-blue-500 mr-2">{icon}</span>}
            {type === "date" ? <DatePicker onSelect={(date) => onChange({ target: { value: date } } as React.ChangeEvent<HTMLInputElement>)} />
            : type === "dropdown" ? <DropDown name={placeholder} label={placeholder} options={option} selectedOption={value} onSelect={(selectedOption) => onChange({ target: { value: selectedOption } } as React.ChangeEvent<HTMLInputElement>)} />
            :
            <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full outline-none focus:outline-none"
            />
        }
            </div>
        </div>
    )
}
