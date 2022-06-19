import React from "react";
import Button from "../Button/Button";
import { NotesCardProps } from "./interface";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const NotesCard: React.FC<NotesCardProps> = ({
	title,
	body,
	archived,
	createdAt,
}) => {
	return (
		<div className="card w-96 bg-primary text-primary-content font-semibold">
			<div className="card-body">
				<h2 className="card-title font-bold">{title}</h2>
				<p className="text-ellipsis overflow-hidden">{body}</p>
				<p>{archived ? `Archived` : `not Archived`}</p>
				<p>Created at {createdAt}</p>
				<div className="flex justify-end mt-2">
					<Button
						type="button"
						iconName={faTrashCan}
						buttonName="DELETE"
						className="bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 w-24 h-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default NotesCard;
