import { useEffect } from "react";
import NotesList from "../NotesList/NotesList";
import MainLayout from "../MainLayout/MainLayout";
import Loader from "../Loader/Loader";
import { useAuth } from "../../context/AuthContext";
import { useDocumentTitle } from "../../utils/function/useDocumentTitle";
import useHTTP from "../../utils/hooks/use-http";

const ListPage = () => {
	useDocumentTitle("Notes App | List Notes")
	const { user: { uid } } = useAuth()
	//  use custom hooks because the method is same with archivedPage
	const {isLoading, data, sendRequest: fetchData} = useHTTP()

	useEffect(() => {
		fetchData(uid, false)
	}, [fetchData, uid]);

	return (
		<MainLayout>
			{isLoading ? <Loader /> : <NotesList data={data} isArchived={false} />}
		</MainLayout>
	);
};

export default ListPage;
