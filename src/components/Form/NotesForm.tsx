import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { push } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "context";
import { notesListRef, useHandleChange } from "utils";
import { motion } from "framer-motion";
import {
	IconButton,
	InputForm,
	InfoTooltip,
	InputType,
	inputObj,
	basicAnimate,
} from "components";
import toast from "react-hot-toast";

const NotesForm = () => {
	const { pathname } = useLocation();
	const { initial, animate, transition } = useMemo(() => basicAnimate, []);
	const {
		user: { uid },
	} = useAuth();
	const [field, setField] = useState<InputType>(inputObj);
	const { handleChange } = useHandleChange();
	const navigate = useNavigate();

	const handleSubmit = async (e: any, title: string, body: string) => {
		e.preventDefault();
		try {
			if (title.length < 51) {
				const newDate = new Date().toISOString();

				const newNotes = {
					id: uuidv4(),
					title,
					body,
					archived: false,
					createdAt: newDate,
					lastModified: newDate,
				};

				await push(notesListRef({ uid, type: "create", objKey: "" }), newNotes);

				navigate("/list");
			} else {
				toast(`Your new notes title is more than 50 character!`);
			}

			setField(inputObj);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={initial}
			transition={transition}
			className="flex flex-col sm:w-full w-10/12 max-w-md px-4 mx-auto my-10 lg:my-6 py-5 xl:py-10 rounded-xl
			shadow bg-gray-800 sm:px-6 md:px-8 lg:px-10 text-white font-semibold"
		>
			<div className="self-center mb-6 text-xl  sm:text-4xl text-white font-bold">
				Create New Notes
			</div>

			<form
				className="flex flex-col gap-5"
				onSubmit={(e) => handleSubmit(e, field.title, field.content)}
			>
				<InputForm
					name="title"
					placeholder="Insert new title notes"
					type="text"
					handleChange={(e) => handleChange(e, setField)}
					value={field.title}
				/>

				<InputForm
					name="content"
					placeholder="Insert new content notes"
					handleChange={(e) => handleChange(e, setField)}
					value={field.content}
				/>

				<IconButton
					type="submit"
					iconName={faPlus}
					buttonName="Add New Notes"
					field={field}
					className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 w-full"
				/>

				{pathname === "/create" && <InfoTooltip {...field} />}
			</form>
		</motion.div>
	);
};

export default NotesForm;
