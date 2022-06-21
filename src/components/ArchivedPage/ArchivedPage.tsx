import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { getData } from "../../utils/function/function";
import { ListNotesProps } from "../ListPage/interface";
import Loader from "../Loader/Loader";
import MainLayout from "../MainLayout/MainLayout";
import NotesList from "../NotesList/NotesList";

const ArchivedPage = () => {
	const { user } = useAuth()
	const [data, setData] = useState<ListNotesProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)
		getData({setData, isArchived: true, uid: user.uid});

		const interval = setInterval(() => {
			getData({setData, isArchived: true, uid: user.uid});
		}, 300);

		setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => clearInterval(interval);
	}, [user.uid]);

	return (
		<MainLayout>
			{isLoading ? <Loader /> : <NotesList data={data} />}
		</MainLayout>
	);
};

export default ArchivedPage;
