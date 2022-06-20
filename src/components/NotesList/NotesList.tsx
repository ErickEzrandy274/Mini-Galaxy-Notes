import React from "react";
import NotesCard from "../Card/NotesCard";
import { DataProps, ListNotesProps } from "../ListPage/interface";
import NewLink from "../NewLink/NewLink";

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
				<div className="flex flex-col gap-4 text-center items-center my-10 font-semibold text-white cursor-default">
					<h2 className="text-5xl md:text-6xl">Tidak ada catatan</h2>
					<h2 className="text-3xl md:text-4xl">
						Silahkan buat catatan terlebih dahulu!
					</h2>
					<NewLink
						to="/create"
						linkName="Create New Note"
						fromNav={false}
					/>
				</div>
			)}
		</>
	);
};

export default NotesList;
