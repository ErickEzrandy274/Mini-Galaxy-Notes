import React from "react";
import IconButton from "../Button/IconButton";
import { faTrashCan, faArchive } from "@fortawesome/free-solid-svg-icons";
import { ListNotesProps } from "../ListPage/interface";
import { deleteCard, updateCard } from "../../utils/function/function";

const NotesCard: React.FC<ListNotesProps> = ({
	title,
	body,
	objKey,
	archived,
	createdAt,
	lastModified,
}) => {

	return (
		<div className="card w-96 bg-primary text-primary-content font-semibold">
			<div className="card-body">
				<h2 className="card-title font-bold tracking-wide">{title}</h2>
				<p className="text-ellipsis overflow-hidden border-2 border-dashed rounded-lg p-3 mb-2">{body}</p>
				<p>Status:
					<span className={`p-1.5 m-1 rounded-lg font-bold tracking-wide ${archived ? ` bg-orange-700` : `bg-base-300`} `}>
						{archived ? `Archived` : `Not Archived`}
					</span>
					
				</p>
				<p>Created at: {createdAt}</p>
				<p>LastModified at: {lastModified}</p>
			</div>

			<div className="flex justify-end bg-base-100 p-4 gap-4">
				<IconButton
					type="button"
					iconName={faArchive}
					buttonName="Archived"
					className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 w-28 h-10"
					handleClick={() => { if (objKey !== null) updateCard(objKey, archived) }}
				/>

				<IconButton
					type="button"
					iconName={faTrashCan}
					buttonName="DELETE"
					className="bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 w-24 h-10"
					handleClick={() => { if (objKey !== null) deleteCard(objKey)}}
				/>
			</div>
		</div>
	);
};

export default NotesCard;
