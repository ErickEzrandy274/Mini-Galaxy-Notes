import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NotesCardProps } from "./interface";

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
					<button
						className="py-2 px-4 flex justify-center items-center gap-2
							bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 
								text-white w-24 h-10 transition ease-in duration-200 text-center text-base shadow-xl 
									focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
						
					>
						<FontAwesomeIcon icon={solid("trash-can")} />
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotesCard;
