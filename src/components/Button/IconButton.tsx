import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useWindowSize } from "../../utils/function/useWindowSize";
import { IconButtonProps } from "./interface";

const IconButton: React.FC<IconButtonProps> = ({
	buttonName,
	className,
	type,
	iconName,
	handleClick,
	field,
}) => {
	const { width } = useWindowSize();

	return (
		<button
			onClick={handleClick}
			type={type}
			className={`py-2 px-4 flex justify-center items-center gap-2 font-semibold
                text-white transition ease-in duration-200 text-center text-base shadow-xl rounded-lg
                ${
					!!field?.title.length || !!field?.content.length
						? `bg-gray-600 cursor-not-allowed`
						: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`
				}`}
			disabled={
				buttonName === "Add New Notes" &&
				(!!field?.title.length || !!field?.content.length ? true : false)
			}
		>
			{width >= 400 && <FontAwesomeIcon icon={iconName} />}
			{buttonName}
		</button>
	);
};

export default IconButton;
