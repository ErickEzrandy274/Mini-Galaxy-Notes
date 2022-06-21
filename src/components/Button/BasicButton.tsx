import React from "react";
import { BasicButtonProps } from "./interface";

const BasicButton: React.FC<BasicButtonProps> = ({
	type,
	buttonName,
	className,
}) => {
	return (
		<button
			type={type}
			className={className}
		>
			{buttonName}
		</button>
	);
};

export default BasicButton;
