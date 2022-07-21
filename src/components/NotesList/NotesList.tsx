import React from "react";
import NotesCard from "../Card/NotesCard";
import { DataProps, ListNotesProps } from "../ListPage/interface";
import NewLink from "../NewLink/NewLink";
import { motion } from "framer-motion";
import {
	basicAnimate,
	customTransition,
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
	const { transition: customTransitions } = customTransition;

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
					{data.map((item: ListNotesProps, index: number) => {
						return <NotesCard {...item} key={item.id} index={index} />;
					})}
				</motion.div>
			) : (
				<motion.div
					initial={initial}
					animate={animate}
					exit={initial}
					transition={customTransitions}
					className="flex flex-col gap-4 text-center items-center my-10 font-semibold text-white cursor-default"
				>
					<motion.h2
						initial={secondInit}
						animate={secondAnim}
						exit={initial}
						transition={secondTrans}
						className="text-4xl sm:text-5xl md:text-6xl"
					>{`You don't have ${isArchived ? `archived` : ``} notes!`}</motion.h2>

					<motion.h2
						initial={thirdInit}
						animate={secondAnim}
						exit={initial}
						transition={secondTrans}
						className="text-3xl sm:text-4xl md:text-5xl"
					>
						Make a new note first!
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
