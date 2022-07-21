import React, { useState } from "react";
import IconButton from "../Button/IconButton";
import { faTrashCan, faArchive, faPenToSquare, faFloppyDisk, faXmark, } from "@fortawesome/free-solid-svg-icons";
import { ListNotesProps } from "../ListPage/interface";
import { deleteCard, updateArchivedCard, updateContentCard } from "../../utils/function/function";
import { useAuth } from "../../context/AuthContext";
import ConfirmationModal from "../Modal/ConfirmationModal";
import { motion } from "framer-motion";
import { basicAnimate, extendBasicAnimate } from "../Authentication/constant";
import Input from "../Input/Input";
import LabelModal from "../Modal/LabelModal";
import { setColor } from "./notesFunction";

const NotesCard: React.FC<ListNotesProps> = ({
	title,
	body,
	objKey,
	archived,
	createdAt,
	lastModified,
	index,
}) => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [modalType, setModalType] = useState<"delete" | "update">("delete");
	const [editData, setEditData] = useState({ title: "", body: "", });
	const { user } = useAuth();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const { initial, animate } = basicAnimate;
	const { initial: extendInit, animate: extendAnim, transition } = extendBasicAnimate;

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setEditData({ ...editData, [name]: value });
	};

	const handleClick = () => {
		setEditData(
			!isEdit
				? { ...editData, title, body }
				: { ...editData, title: "", body: "" }
		);
		setIsEdit(!isEdit);
	};

	const handleUpdate = () => {
		if (objKey !== null) {
			const { title, body } = editData;
			updateContentCard(
				{ uid: user.uid, type: "update", objKey },
				title,
				body
			);
			setIsEdit(false);
			setIsModalOpen(false);
		}
	};

	const handleArchive = () => {
		if (objKey !== null)
			updateArchivedCard(
				{ uid: user.uid, type: "update", objKey },
				archived
			);
	};

	const handleDelete = () => {
		if (objKey !== null)
			deleteCard({
				uid: user.uid,
				type: "delete",
				objKey,
			});
	};

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={initial}
			transition={{
				delay: 0.25 + 0.25 * index!,
				stiffness: 100,
				duration: 1.5,
			}}
			className="card w-96 bg-primary text-white font-semibold"
		>
			<div className="card-body">
				{isEdit && (
					<motion.div
						initial={extendInit}
						animate={extendAnim}
						exit={extendInit}
						transition={{
							...transition,
							delay: 0.1,
						}}
						className="flex justify-end"
					>
						<IconButton
							type="button"
							iconName={faXmark}
							buttonName="Close Edit"
							className={`${setColor("Close Edit")} w-32 h-7`}
							handleClick={handleClick}
						/>
					</motion.div>
				)}

				{isEdit ? (
					<Input
						type="title"
						title={editData.title}
						handleChange={handleChange}
					/>
				) : (
					<h2 className="card-title font-bold tracking-wide">
						{title}
					</h2>
				)}

				<div className="border-2 border-dashed rounded-lg p-3 mb-2">
					{isEdit ? (
						<Input
							type="body"
							body={editData.body}
							handleChange={handleChange}
						/>
					) : (
						<p className="text-ellipsis overflow-hidden">{body}</p>
					)}
				</div>
				<p>
					Status:
					<span
						className={`p-1.5 m-1 rounded-lg font-bold tracking-wide ${
							archived ? ` bg-orange-700` : `bg-base-300`
						} `}
					>
						{archived ? `Archived` : `Not Archived`}
					</span>
				</p>
				<p>Created at: {createdAt}</p>
				<p>Last modified at: {lastModified}</p>
			</div>

			<div className="flex justify-end bg-base-100 p-2 py-4 sm:p-4 gap-2 sm:gap-4">
				{isEdit ? (
					<LabelModal
						labelName="Save"
						setIsModalOpen={setIsModalOpen}
						setModalType={setModalType}
						className={`${setColor("Edit")} w-1/3 h-10`}
						icon={faFloppyDisk}
					/>
				) : (
					<IconButton
						type="button"
						iconName={faPenToSquare}
						buttonName="Edit"
						className={`${setColor("Edit")} w-1/3 h-10`}
						handleClick={handleClick}
					/>
				)}

				<IconButton
					type="button"
					iconName={faArchive}
					buttonName="Archive"
					className={`${setColor("Archive")} w-1/3 h-10`}
					handleClick={handleArchive}
				/>

				<LabelModal
					labelName="Delete"
					setIsModalOpen={setIsModalOpen}
					setModalType={setModalType}
					className={setColor("Delete")}
					icon={faTrashCan}
				/>

				{isModalOpen && (
					<ConfirmationModal
						type={modalType}
						setModalOpen={setIsModalOpen}
						onClick={
							modalType === "delete" ? handleDelete : handleUpdate
						}
					/>
				)}
			</div>
		</motion.div>
	);
};

export default NotesCard;
