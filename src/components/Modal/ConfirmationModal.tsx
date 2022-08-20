import React from "react";
import { ModalProps } from "./interface";
import { motion } from "framer-motion";
import { basicAnimate } from "../Authentication/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { toCapitalize } from "../../utils/function/function";

const ConfirmationModal: React.FC<ModalProps> = ({
	setModalOpen,
	onClick,
	type,
}) => {
	const { initial, animate } = basicAnimate;

	return (
		<>
			<input type="checkbox" id="confirmationModal" className="modal-toggle" />
			<motion.div
				initial={initial}
				animate={animate}
				exit={initial}
				transition={{ duration: 0.2, ease: "easeOut" }}
				className="modal"
			>
				<div className="modal-box flex flex-col gap-3 text-white">
					<div className="flex gap-2 items-center border-b-2 border-gray-200/50">
						<FontAwesomeIcon icon={faWarning} className="w-5 h-5" />
						<h3 className="font-bold text-lg uppercase tracking-wide">
							{toCapitalize(type)} Confirmation
						</h3>
					</div>

					<p>
						Are you sure
						{type === "delete"
							? ` want to delete this note?`
							: ` you want to keep this content log update?`}
					</p>

					<div className="modal-action">
						<button
							className="btn btn-outline btn-secondary uppercase w-20"
							onClick={() => setModalOpen(false)}
						>
							Cancel
						</button>

						<button
							className="btn btn-outline btn-success uppercase w-20"
							onClick={onClick}
						>
							Yes
						</button>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default ConfirmationModal;
