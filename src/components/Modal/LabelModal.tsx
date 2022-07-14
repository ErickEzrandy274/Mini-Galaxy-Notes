import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { LabelModalProps } from "./interface";

const LabelModal: React.FC<LabelModalProps> = ({
	labelName,
	icon,
    className,
    setModalType,
    setIsModalOpen,
}) => {
    const modalType = labelName === "Save" ? "update" : "delete";

	return (
		<label
			htmlFor="confirmationModal"
			className={`flex justify-center items-center gap-2 upppercase focus:ring-2 focus:ring-offset-2 
					w-28 h-10 cursor-pointer rounded-lg py-2 px-4 ${className}`}
            onClick={() => {
                setModalType(modalType);
		        setIsModalOpen(true);
            }}
		>
			<FontAwesomeIcon icon={icon} />
			{labelName}
		</label>
	);
};

export default LabelModal;
