import { useEffect } from "react";
import { useAuth, useDocumentTitle, useHTTP } from "utils";
import { MainLayout, Loader, NotesList } from "components";

const ArchivedPage = () => {
	useDocumentTitle("Mini Galaxy Notes App | Archived Notes");
	const {
		user: { uid },
	} = useAuth();
	//  use custom hooks because the method is same with listPage
	const { isLoading, data, sendRequest: fetchData } = useHTTP();

	useEffect(() => {
		fetchData(uid);
	}, [fetchData, uid]);

	return (
		<MainLayout>
			{isLoading ? <Loader /> : <NotesList data={data} isArchived />}
		</MainLayout>
	);
};

export default ArchivedPage;
