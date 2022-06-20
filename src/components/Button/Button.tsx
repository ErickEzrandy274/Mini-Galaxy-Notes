import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
	buttonName,
	className,
	type,
	iconName,
	handleClick,
	objKey
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
                text-white transition ease-in duration-200 text-center text-base shadow-xl 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${className}`}
		>
			<FontAwesomeIcon icon={iconName} />
			{buttonName}
		</button>
	);
};

export default Button;
