import React from "react";

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
}

export const CityInput: React.FC<InputProps> = ({ type, placeholder, value, onChange, icon }) => {
    return (
        <div className="flex flex-col items-start w-full">
        <label className="text-gray-500 mb-1">{placeholder}</label>
        <div className="flex items-center border border-gray-300 rounded-lg p-2">
            {icon && <span className="text-blue-500 mr-2">{icon}</span>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full outline-none"
                />
            </div>
        </div>
    )
}
