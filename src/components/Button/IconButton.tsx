import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButtonProps } from "./interface";
import { useWindowSize } from "utils";

const IconButton: React.FC<IconButtonProps> = ({
	buttonName,
	className,
	type,
	iconName,
	handleClick,
	field,
}) => {
	const { width } = useWindowSize();
	const isNewNoteButton: boolean = useMemo(
		() => buttonName === "Add New Notes",
		[buttonName]
	);
	const isEmpty: boolean = !field?.title.length || !field?.content.length;

	return (
		<button
			onClick={handleClick}
			type={type}
			className={`py-2 px-2 sm:px-4 flex justify-center items-center gap-2 sm:tracking-[0.01rem] font-medium
                text-white transition ease-in duration-200 text-center shadow-xl rounded-lg ${
									width >= 360 ? "text-base" : "text-sm"
								}
                ${
									isNewNoteButton && isEmpty
										? `bg-gray-600 cursor-not-allowed`
										: `focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`
								}`}
			disabled={isNewNoteButton && (isEmpty ? true : false)}
		>
			{(buttonName === "Close Edit" || width >= 450) && (
				<FontAwesomeIcon icon={iconName} />
			)}
			{buttonName}
		</button>
	);
};

export default IconButton;
