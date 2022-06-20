import React from "react";
import { BasicButtonProps } from "./interface";

const Button: React.FC<BasicButtonProps> = ({
	buttonName,
	className,
	type,
}) => {
    return <button type={type} className={className}>{buttonName}</button>;
};

export default Button;
