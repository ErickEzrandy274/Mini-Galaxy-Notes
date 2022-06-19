import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NotesCardProps } from "./interface";

const NotesCard: React.FC<NotesCardProps> = ({ title, body, archived, createdAt }) => {
    
	return (
		<div className="card w-96 bg-primary text-primary-content">
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
                <p>{body}</p>
                <p>{archived ? `Archived` : `not Archived`}</p>
                <p>createdAt {createdAt}</p>
                <div className="card-actions justify-end">
                    <FontAwesomeIcon icon={solid('trash-can')} />
					<button className="btn">Delete</button>
				</div>
			</div>
		</div>
	);
};

export default NotesCard;
