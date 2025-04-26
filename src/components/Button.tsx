import React from 'react';

interface ButtonProps {
    minWidth?: string;
    minHeight?: string;
    value: string;
    color?: string;
    onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ minWidth, minHeight, color, value ,onClick }) => {
    var hoverColor = "hover:bg-blue-700";
    if (color === "blue") {
        hoverColor = "hover:bg-blue-700";
        color = "bg-blue-500";
    } else if (color === "red") {
        hoverColor = "hover:bg-red-700";
        color = "bg-red-500";
    }
    else if (color === "green") {
        hoverColor = "hover:bg-green-700";
        color = "bg-green-500";
    }
    else if (color === "yellow") {
        hoverColor = "hover:bg-yellow-700";
        color = "bg-yellow-500";
    }
    else if (color === "purple") {
        hoverColor = "hover:bg-purple-700";
        color = "bg-purple-500";
    }
    else if (color === "gray") {
        hoverColor = "hover:bg-gray-700";
        color = "bg-gray-500";
    }
    else if (color === "black") {
        hoverColor = "hover:bg-black-700";
        color = "bg-black-500";
    }
    else if (color === "white") {
        hoverColor = "hover:bg-white-700";
        color = "bg-white-500 text-black";
    } else if (color === "orange") {
        hoverColor = "hover:bg-orange-700";
        color = "bg-orange-500";
    } else if (color === "pink") {
        
        hoverColor = "hover:bg-pink-700";
        color = "bg-pink-500";
    }else {
        hoverColor = "hover:bg-blue-700";
        color = "bg-blue-500";
    }
    return (
        <button
            type='submit'
            className={`text-white cursor-pointer font-medium rounded px-4 py-2 ${color} ${hoverColor} transition duration-300 ${minWidth} ${minHeight}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Button;
