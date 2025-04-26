import React from "react";

interface CardProps {
    color?: string;
    minWidth?: string;
    minHeight?: string;
    position?: string;
    anchor?: string;
    children: React.ReactNode;
    flexDirection?: string;
    gap?: string;
    padding?: string;
}

const Card: React.FC<CardProps> = ({
    color = "bg-white",
    minWidth = "min-w-[200px]",
    minHeight = "min-h-[200px]",
    position = "relative",
    anchor = " left-0 right-0 top-0 bottom-0 ",
    children,
    flexDirection = "flex-row",
    gap = "gap-2",
    padding = "p-4"
}) => {
    return (
        <div
            className={`rounded-lg shadow-md p-4 ${color} ${minWidth} ${minHeight} ${position} ${anchor} ${flexDirection} ${gap} ${padding} flex items-center justify-center`}
        >
            {children}
        </div>
    );
};

export default Card;