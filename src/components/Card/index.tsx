import React, { useState } from "react";
import {
	faTrashCan,
	faArchive,
	faPenToSquare,
	faFloppyDisk,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
	dateFormat,
	deleteCard,
	updateArchivedCard,
	updateContentCard,
} from "utils";
import { useAuth } from "context";
import { motion } from "framer-motion";
import { editDataObj, editDataType } from "./interface";
import {
	ConfirmationModal,
	LabelModal,
	Input,
	IconButton,
	ListNotesProps,
	basicAnimate,
	extendBasicAnimate,
} from "components";

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
	const [editData, setEditData] = useState<editDataType>(editDataObj);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const { user } = useAuth();
	const { initial, animate } = basicAnimate;
	const {
		initial: extendInit,
		animate: extendAnim,
		transition,
	} = extendBasicAnimate;

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setEditData({ ...editData, [name]: value });
	};

	const handleClick = () => {
		setEditData(
			!isEdit ? { ...editData, title, body } : { ...editData, ...editDataObj }
		);
		setIsEdit(!isEdit);
	};

	const handleUpdate = () => {
		if (objKey !== null) {
			const { title, body } = editData;
			updateContentCard({ uid: user.uid, type: "update", objKey }, title, body);
			setIsEdit(false);
			setIsModalOpen(false);
		}
	};

	const handleArchive = () => {
		if (objKey !== null)
			updateArchivedCard({ uid: user.uid, type: "update", objKey }, archived);
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
			className="card w-[25rem] bg-primary text-white font-semibold"
		>
			<div className="card-body p-6">
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
							className="bg-gray-700 hover:bg-gray-800 focus:ring-gray-500 focus:ring-offset-gray-200 w-32 h-7"
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
					<h2 className="card-title font-bold tracking-wide">{title}</h2>
				)}

				<div className="border-2 border-dashed rounded-lg p-3 mb-2">
					{isEdit ? (
						<Input
							type="body"
							body={editData.body}
							handleChange={handleChange}
						/>
					) : (
						<p className={`${body.length > 150 && "h-24 overflow-y-scroll"}`}>
							{body}
						</p>
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
				<p>Created at: {dateFormat(createdAt)}</p>
				<p>Last modified at: {dateFormat(lastModified)}</p>
			</div>

			<div className="flex justify-center bg-base-100 p-4 gap-4">
				{isEdit ? (
					<LabelModal
						labelName="Save"
						setIsModalOpen={setIsModalOpen}
						setModalType={setModalType}
						className="bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 h-10 cursor-pointer"
						icon={faFloppyDisk}
						oldContentCard={{ title, body }}
						newContentCard={editData}
					/>
				) : (
					<IconButton
						type="button"
						iconName={faPenToSquare}
						buttonName="Edit"
						className="bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 w-1/4 h-10"
						handleClick={handleClick}
					/>
				)}

				<IconButton
					type="button"
					iconName={faArchive}
					buttonName={!archived ? `Archived` : `Not Archived`}
					className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 h-10"
					handleClick={handleArchive}
				/>

				<LabelModal
					labelName="Delete"
					setIsModalOpen={setIsModalOpen}
					setModalType={setModalType}
					className="bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 w-1/4 cursor-pointer"
					icon={faTrashCan}
				/>

				{isModalOpen && (
					<ConfirmationModal
						type={modalType}
						setModalOpen={setIsModalOpen}
						onClick={modalType === "delete" ? handleDelete : handleUpdate}
					/>
				)}
			</div>
		</motion.div>
	);
};

export default NotesCard;
