import React from 'react';

interface DatePickerProps {
    onSelect: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onSelect }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelect(event.target.value);
    };

    return (
        <div className=" flex flex-col items-start w-full">
            <label htmlFor="date-picker">Pilih Tanggal</label>
            <input
                type="date"
                id="date-picker"
                onChange={handleChange}
                value={new Date().toISOString().split('T')[0]}
                className='outline-none focus:ourline-none'
            />
        </div>
    );
};

export default DatePicker;