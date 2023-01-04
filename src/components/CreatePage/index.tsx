import { useDocumentTitle } from "utils";
import { MainLayout, NotesForm } from "components";

const CreatePage = () => {
	useDocumentTitle("Notes App | Create New Notes");

	return (
		<MainLayout>
			<NotesForm />
		</MainLayout>
	);
};

export default CreatePage;
