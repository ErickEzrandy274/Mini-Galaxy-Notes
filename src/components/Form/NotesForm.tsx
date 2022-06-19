import { useState } from "react";
import { InputType } from "./interface";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import SubmitButton from "./SubmitButton";
import { database } from "../../utils/firebase/firebase";
import { ref, push } from "firebase/database";
import { v4 as uuidv4  } from 'uuid';

const NotesForm = () => {
	const navigate = useNavigate();
	const [field, setField] = useState<InputType>({
		title: "",
		content: "",
	});

	const handleChange = (e: any) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		setField({
			...field,
			[name]: value,
		});
	};

	const handleSubmit = async (e: any, title: string, content: string) => {
		try {
			e.preventDefault()

			const newNotes = {
				id: uuidv4(),
				title,
				body: content,
				archived: false,
				createdAt: new Date().toISOString(),
			}

			await push(ref(database, "Notes"), newNotes)

			setField({
				title: "",
				content: "",
			})

			navigate('/list')
		} catch (error) {
			console.log(error)
		}
	};

	return (
		<div className="flex flex-col sm:w-full w-10/12 max-w-md px-4 mx-auto m-3 sm:mt-20 2xl:mt-28 py-8 rounded-xl shadow bg-gray-800 sm:px-6 md:px-8 lg:px-10 text-white font-semibold">
			<div className="self-center mb-6 text-xl  sm:text-4xl text-white font-bold">
				Create New Notes
			</div>

			<form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e, field.title, field.content)}>
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
				<SubmitButton />
			</form>
		</div>
	);
};

export default NotesForm;
