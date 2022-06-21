import { useState, useEffect } from "react";
import NotesList from "../NotesList/NotesList";
import { ListNotesProps } from "./interface";
import MainLayout from "../MainLayout/MainLayout";
import { getData } from "../../utils/function/function";
import Loader from "../Loader/Loader";
import { useAuth } from "../../context/AuthContext";

const ListPage = () => {
	const { user } = useAuth()
	const [data, setData] = useState<ListNotesProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)
		getData({setData, isArchived: false, uid: user.uid});

		const interval = setInterval(() => {
			getData({setData, isArchived: false, uid: user.uid});
		}, 300);

		setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => clearInterval(interval);
	}, [user.uid]);

	return (
		<MainLayout>
			{isLoading ? <Loader /> : <NotesList data={data} isArchived={false} />}
		</MainLayout>
	);
};

export default ListPage;
