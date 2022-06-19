import React from "react";
import Button from "../Button/Button";
import { NotesCardProps } from "./interface";
import { faTrashCan, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

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
				<p>Status:
					<span className={`p-1.5 m-1 rounded-lg ${archived ? `bg-base-100` : `bg-base-300`} `}>
						{archived ? `Archived` : `not Archived`}
					</span>
				</p>
				<p>Created at: {createdAt}</p>
			</div>

			<div className="flex justify-end bg-base-100 p-4 gap-4">
				<Button
					type="button"
					iconName={faMagnifyingGlassPlus}
					buttonName="SEE"
					className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 w-24 h-10"
				/>

				<Button
					type="button"
					iconName={faTrashCan}
					buttonName="DELETE"
					className="bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 w-24 h-10"
				/>
			</div>
		</div>
	);
};

export default NotesCard;
