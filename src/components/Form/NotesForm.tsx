import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "context";
import { handleSubmit, paramsType, useHandleChange } from "utils";
import { motion } from "framer-motion";
import {
	IconButton,
	InputForm,
	InfoTooltip,
	InputType,
	inputObj,
	basicAnimate,
	newNotesInput,
	newNotesInputType,
} from "components";
import toast from "react-hot-toast";

const NotesForm = () => {
	const { pathname } = useLocation();
	const { initial, animate, transition } = useMemo(() => basicAnimate, []);
	const memoizeNewNotesInput = useMemo(() => newNotesInput, []);
	const {
		user: { uid },
	} = useAuth();
	const [field, setField] = useState<InputType>(inputObj);
	const { handleChange } = useHandleChange();
	const navigate = useNavigate();

	const createNewNotes = async (params: paramsType) => {
		await handleSubmit(params);
	};

	return (
		<motion.section
			initial={initial}
			animate={animate}
			exit={initial}
			transition={transition}
			className="flex flex-col sm:w-full w-10/12 max-w-md px-4 mx-auto my-10 lg:my-6 py-5 xl:py-10 rounded-xl
			shadow bg-gray-800 sm:px-6 md:px-8 lg:px-10 text-white font-semibold"
		>
			<h2 className="self-center mb-6 text-xl  sm:text-4xl text-white font-bold">
				Create New Notes
			</h2>

			<form
				className="flex flex-col gap-5"
				onSubmit={(e) => {
					const { title, content: body } = field;

					createNewNotes({
						e,
						title,
						body,
						toast,
						uid,
						navigate,
						setField,
					});
				}}
			>
				{memoizeNewNotesInput.map(({ name, type }: newNotesInputType) => {
					return (
						<InputForm
							key={name}
							name={name}
							type={type}
							placeholder={`Insert new ${name} notes`}
							handleChange={(e) => handleChange(e, setField)}
							value={field[name]}
						/>
					);
				})}

				<IconButton
					type="submit"
					iconName={faPlus}
					buttonName="Add New Notes"
					field={field}
					className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 w-full"
				/>

				{pathname === "/create" && <InfoTooltip {...field} />}
			</form>
		</motion.section>
	);
};

export default NotesForm;
