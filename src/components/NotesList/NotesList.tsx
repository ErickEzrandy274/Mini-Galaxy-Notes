import React from "react";
import NotesCard from "../Card/NotesCard";
import { DataProps, ListNotesProps } from "../ListPage/interface";

const NotesList: React.FC<DataProps> = ({ data }) => {
	return (
		<>
			{data.length > 0 ? (
				<div className="flex flex-wrap gap-6 m-5 justify-center">
					{data.map((item: ListNotesProps) => {
						return <NotesCard {...item} key={item.id} />;
					})}
				</div>
			) : (
				<div>
					<h2>Tidak ada catatan</h2>
				</div>
			)}
		</>
	);
};

export default NotesList;
