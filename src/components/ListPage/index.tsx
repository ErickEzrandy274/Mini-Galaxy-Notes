import { useEffect } from "react";
import { useAuth } from "context";
import { useDocumentTitle, useHTTP } from "utils";
import { NotesList, MainLayout, Loader } from "components";

const ListPage = () => {
	useDocumentTitle("Mini Galaxy Notes App | List Notes");
	const {
		user: { uid },
	} = useAuth();
	//  use custom hooks because the method is same with archivedPage
	const { isLoading, data, sendRequest: fetchData } = useHTTP();

	useEffect(() => {
		fetchData(uid, false);
	}, [fetchData, uid]);

	return (
		<MainLayout>
			{isLoading ? <Loader /> : <NotesList data={data} isArchived={false} />}
		</MainLayout>
	);
};

export default ListPage;
