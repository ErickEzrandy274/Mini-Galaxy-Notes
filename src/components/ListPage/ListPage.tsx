import { useState, useEffect } from "react";
import NotesList from "../NotesList/NotesList";
import { ListNotesProps } from "./interface";
import MainLayout from "../MainLayout/MainLayout";
import { getData } from "../../utils/function/function";
import Loader from "../Loader/Loader";

const ListPage = () => {
	const [data, setData] = useState<ListNotesProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)
		getData({setData, isArchived: false});

		const interval = setInterval(() => {
			getData({setData, isArchived: false});
		}, 300);

		setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => clearInterval(interval);
	}, []);

	return (
		<MainLayout>
			{isLoading ? <Loader /> : <NotesList data={data} />}
		</MainLayout>
	);
};

export default ListPage;
