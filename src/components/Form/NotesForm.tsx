import { useState } from "react";
import { InputType, inputObj } from "./interface";
import { useLocation, useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import { push } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import IconButton from "../Button/IconButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import { notesListRef } from "../../utils/function/function";
import { motion } from "framer-motion";
import { basicAnimate } from "../Authentication/constant";
import InfoTooltip from "../ToolTip/InfoTooltip";

const NotesForm = () => {
	const { pathname } = useLocation();
	const { initial, animate, transition } = basicAnimate;
	const { user } = useAuth();
	const navigate = useNavigate();
	const [field, setField] = useState<InputType>(inputObj);

	const handleChange = (e: any) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		setField({
			...field,
			[name]: value,
		});
	};

	const handleSubmit = async (e: any, title: string, body: string) => {
		try {
			if (title.length < 51) {
				e.preventDefault();
				const newDate = new Date().toISOString();

				const newNotes = {
					id: uuidv4(),
					title,
					body,
					archived: false,
					createdAt: newDate,
					lastModified: newDate,
				};

				await push(
					notesListRef({ uid: user.uid, type: "create", objKey: "" }),
					newNotes
				);

				navigate("/list");
			} else {
				alert(`Your new notes title is more than 50 character!`);
			}

			setField(inputObj);
		} catch (error) {
			console.log(error);
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
					handleChange={handleChange}
					value={field.title}
				/>

				<InputForm
					name="content"
					placeholder="Insert new content notes"
					handleChange={handleChange}
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
