import React from "react";
import { Link } from "react-router-dom";
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
				<div className="flex flex-col gap-4 text-center items-center my-10 font-semibold text-white">
						<h2 className="text-5xl md:text-6xl">Tidak ada catatan</h2>
						<h2 className="text-3xl md:text-4xl">Silahkan buat catatan terlebih dahulu!</h2>
					<Link
						to="/create"
						className={`bg-gray-700 px-2 py-1 hover:font-semibold text-lg transition-colors duration-200 transform rounded-lg 
								hover:bg-gray-900 text-gray-200 hover:text-gray-100 md:mx-2 w-40 shadow-xl`}
					>
						Create New Note
					</Link>
				</div>
			)}
		</>
	);
};

export default NotesList;
