import React, { useMemo } from "react";
import { BasicButtonProps } from "./interface";

const BasicButton: React.FC<BasicButtonProps> = ({
	type,
	buttonName,
	className,
	errors,
}) => {
	const disable: boolean = useMemo(
		() => Object.values(errors).some((value) => value !== ""),
		[errors]
	);

	const disableClassName = useMemo(
		() =>
			disable
				? ` bg-gray-400 cursor-not-allowed`
				: ` bg-blue-600 hover:bg-blue-700 focus:outline-none focus:bg-blue-600`,
		[disable]
	);

	return (
		<button
			type={type}
			className={className + disableClassName}
			disabled={disable}
		>
			{buttonName}
		</button>
	);
};

export default BasicButton;
