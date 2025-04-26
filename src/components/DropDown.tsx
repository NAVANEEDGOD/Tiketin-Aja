import React from 'react'


interface DropDownProps {
    name: string;
    label: string;
    options?: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
    }

export const DropDown:React.FC<DropDownProps> = ({options,selectedOption,onSelect,name,label}) => {
    const handleSelect = (option: string) => {
        if (option === "") return; // Prevent empty selection
        onSelect(option);
        console.log("Selected option:", option);
    }
    return (
    <select name={name} title={label} id={name} className="w-full outline-none focus:outline-none" value={selectedOption} onChange={(e) => handleSelect(e.target.value)} >
        <option value="" disabled={true}>{label}</option>
        {options?.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ))}
    </select>
  )
}
