import React from "react";
import NotesCard from "../Card/NotesCard";
import { DataProps, ListNotesProps } from "../ListPage/interface";
import NewLink from "../NewLink/NewLink";
import { motion } from "framer-motion";

const NotesList: React.FC<DataProps> = ({ data, isArchived }) => {
	const initial = { opacity: 0 };
	const animate = { opacity: 1 };
	const transition = { delay: 0.25, stiffness: 100, duration: 1 };

	return (
		<>
			{data.length > 0 ? (
				<motion.div
					initial={initial}
					animate={animate}
					exit={initial}
					transition={transition}
					className="flex flex-wrap gap-6 m-5 justify-center"
				>
					{data.map((item: ListNotesProps) => {
						return <NotesCard {...item} key={item.id} />;
					})}
				</motion.div>
			) : (
				<motion.div
					initial={initial}
					animate={animate}
					exit={initial}
					transition={transition}
					className="flex flex-col gap-4 text-center items-center my-10 font-semibold text-white cursor-default"
				>
					<h2 className="text-5xl md:text-6xl">{`Tidak ada catatan${
						isArchived ? ` yang diarsip` : ``
					}!`}</h2>
					<h2 className="text-3xl md:text-4xl">
						Silahkan buat catatan terlebih dahulu!
					</h2>
					<NewLink
						to="/create"
						linkName="Create New Note"
						fromNav={false}
					/>
				</motion.div>
			)}
		</>
	);
};

export default NotesList;
