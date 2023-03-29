import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isNoteContentChange, useWindowSize } from "utils";
import { LabelModalProps } from "./interface";

const LabelModal: React.FC<LabelModalProps> = ({
	labelName,
	icon,
	className,
	setModalType,
	setIsModalOpen,
	oldContentCard,
	newContentCard,
}) => {
	const modalType = labelName === "Save" ? "update" : "delete";
	const { width } = useWindowSize();
	const isChanged: boolean =
		labelName === "Save" &&
		isNoteContentChange(oldContentCard!, newContentCard!);
	const isTitleTooLong: boolean =
		labelName === "Save" && newContentCard!.title.length > 50;
	const MODALCONFIRM: string = `confirmationModal`;
	const isSaveModal: boolean = labelName === "Save";
	const customClassName: string = isSaveModal
		? isChanged && !isTitleTooLong
			? className
			: `bg-gray-400 w-1/4 h-10 cursor-not-allowed`
		: className;

	return (
		<label
			htmlFor={
				isSaveModal
					? isChanged && !isTitleTooLong
						? MODALCONFIRM
						: ``
					: MODALCONFIRM
			}
			className={`flex justify-center items-center gap-2 upppercase focus:ring-2 focus:ring-offset-2 
					w-1/4 h-10 rounded-lg py-2 px-2 sm:px-4 ${
						width >= 360 ? "text-base" : "text-sm"
					} ${customClassName}`}
			onClick={() => {
				setModalType(modalType);
				setIsModalOpen(true);
			}}
		>
			{width >= 450 && <FontAwesomeIcon icon={icon} />}
			{labelName}
		</label>
	);
};

export default LabelModal;
