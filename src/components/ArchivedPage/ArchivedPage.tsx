import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useDocumentTitle } from "../../utils/function/useDocumentTitle";
import useHTTP from "../../utils/hooks/use-http";
import Loader from "../Loader/Loader";
import MainLayout from "../MainLayout/MainLayout";
import NotesList from "../NotesList/NotesList";

const ArchivedPage = () => {
	useDocumentTitle("Notes App | Archived Notes")
	const { user: { uid } } = useAuth();
	//  use custom hooks because the method is same with listPage
	const {isLoading, data, sendRequest: fetchData} = useHTTP()

	useEffect(() => {
		fetchData(uid)
	}, [fetchData, uid]);

	return (
		<MainLayout>
			{isLoading ? <Loader /> : <NotesList data={data} isArchived />}
		</MainLayout>
	);
};

export default ArchivedPage;
