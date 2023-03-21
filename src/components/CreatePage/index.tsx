import { useDocumentTitle } from "utils";
import { MainLayout, NotesForm } from "components";

const CreatePage = () => {
	useDocumentTitle("Mini Galaxy Notes App | Create New Notes");

	return (
		<MainLayout>
			<NotesForm />
		</MainLayout>
	);
};

export default CreatePage;
