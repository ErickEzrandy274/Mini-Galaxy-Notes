import React from "react";
import NotesCard from "../Card/NotesCard";
import { DataProps, ListNotesProps } from "../ListPage/interface";
import NewLink from "../NewLink/NewLink";
import { motion } from "framer-motion";
import {
	basicAnimate,
	secondAnimate,
	thirdAnimate,
} from "../Authentication/constant";

const NotesList: React.FC<DataProps> = ({ data, isArchived }) => {
	const { initial, animate, transition } = basicAnimate;
	const {
		initial: secondInit,
		animate: secondAnim,
		transition: secondTrans,
	} = secondAnimate;
	const { initial: thirdInit } = thirdAnimate;

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
					<motion.h2
						initial={secondInit}
						animate={secondAnim}
						exit={initial}
						transition={secondTrans}
						className="text-5xl md:text-6xl"
					>{`Tidak ada catatan${
						isArchived ? ` yang diarsip` : ``
					}!`}</motion.h2>

					<motion.h2
						initial={thirdInit}
						animate={secondAnim}
						exit={initial}
						transition={secondTrans}
						className="text-3xl md:text-4xl"
					>
						Silahkan buat catatan terlebih dahulu!
					</motion.h2>

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
