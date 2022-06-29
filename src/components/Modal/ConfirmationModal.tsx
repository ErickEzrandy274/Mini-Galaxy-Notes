import React from "react";
import { ModalProps } from "./interface";
import { motion } from "framer-motion";
import { basicAnimate } from "../Authentication/constant";

const ConfirmationModal: React.FC<ModalProps> = ({ setModalOpen, onClick }) => {
	const { initial, animate } = basicAnimate;

	return (
		<>
			<input
				type="checkbox"
				id="confirmationModal"
				className="modal-toggle"
			/>
			<motion.div
				initial={initial}
				animate={animate}
				exit={initial}
				transition={{ duration: .5 }}
				className="modal"
			>
				<div className="modal-box">
					<h3 className="font-bold text-lg uppercase tracking-wide">
						Delete Confirmation
					</h3>

					<p className="py-4">
						Are you sure want to delete this note?
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
