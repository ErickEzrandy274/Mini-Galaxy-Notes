import React from "react";
import NotesCard from "../Card/NotesCard";
import { DataProps, ListNotesProps } from "../ListPage/interface";

const NotesList: React.FC<DataProps> = ({ data }) => {
	return (
		<div className="flex flex-wrap gap-6 m-5">
			{data.map((item: ListNotesProps) => {
				return (
					<NotesCard {...item} key={item.id} />
				)
			})}
		</div>
	);
};

export default NotesList;
