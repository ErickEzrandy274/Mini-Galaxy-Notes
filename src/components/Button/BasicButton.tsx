import React from "react";
import { BasicButtonProps } from "./interface";

const BasicButton: React.FC<BasicButtonProps> = ({
	type,
	buttonName,
	className,
	email,
	password,
}) => {
	const disableClassName =
		(email.length < 5 && !email.includes("@")) || password.length < 10
			? ` bg-gray-400 cursor-not-allowed`
			: ` bg-blue-600 
				rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-600`;
	return (
		<button
			type={type}
			className={className + disableClassName}
			disabled={
				(email.length < 5 && !email.includes("@")) ||
				password.length < 10
					? true
					: false
			}
		>
			{buttonName}
		</button>
	);
};

export default BasicButton;
