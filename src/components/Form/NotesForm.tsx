import React, {useState} from "react";
import { InputType } from "./interface";
import InputForm from "./InputForm";
import SubmitButton from "./SubmitButton";

const NotesForm = () => {
	const [field, setField] = useState<InputType>({
		title: "",
		content: ""
	})

	return (
		<div className="flex flex-col sm:w-full w-10/12 max-w-md px-4 mx-auto m-3 sm:mt-20 2xl:mt-28 py-8 rounded-xl shadow bg-gray-800 sm:px-6 md:px-8 lg:px-10 text-white font-semibold">
			<div className="self-center mb-6 text-xl  sm:text-4xl text-white font-bold">
				Create New Notes
			</div>

			<form className="flex flex-col gap-4">
				<InputForm id="Title" placeholder="Insert new title notes" type="text" />
				<InputForm id="Content" placeholder="Insert new content notes" />

				<SubmitButton />
			</form>
		</div>
	);
};

export default NotesForm;
