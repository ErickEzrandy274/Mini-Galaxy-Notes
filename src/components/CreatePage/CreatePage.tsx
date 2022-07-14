import MainLayout from "../MainLayout/MainLayout";
import NotesForm from "../Form/NotesForm";
import { useDocumentTitle } from "../../utils/function/useDocumentTitle";

const CreatePage = () => {
	useDocumentTitle("Notes App | Create New Notes");
	
	return (
		<MainLayout>
			<NotesForm />
		</MainLayout>
	);
};

export default CreatePage;
