import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
	buttonName,
	className,
	type,
	iconName,
	handleClick,
	objKey,
	field
}) => {
	const onClick = (objKey: string | null | undefined) => {
		if (handleClick !== undefined && objKey !== null && objKey !== undefined) {
			handleClick(objKey)
		}
	}

	return (
		<button
			onClick={() => onClick(objKey)}
            type={type}
			className={`py-2 px-4 flex justify-center items-center gap-2 font-semibold
                text-white transition ease-in duration-200 text-center text-base shadow-xl rounded-lg
                ${field?.title.length === 0 || field?.content.length === 0 ? `bg-gray-600 cursor-not-allowed`
					:`focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}`}
			disabled={buttonName === "Add New Notes" && (field?.title.length === 0 || field?.content.length === 0 ? true : false)}
		>
			<FontAwesomeIcon icon={iconName} />
			{buttonName}
		</button>
	);
};

export default Button;
