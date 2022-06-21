import { useEffect, useState } from "react";
import { getData } from "../../utils/function/function";
import { ListNotesProps } from "../ListPage/interface";
import Loader from "../Loader/Loader";
import MainLayout from "../MainLayout/MainLayout";
import NotesList from "../NotesList/NotesList";

const ArchivedPage = () => {
	const [data, setData] = useState<ListNotesProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)
		getData({setData, isArchived: true});

		const interval = setInterval(() => {
			getData({setData, isArchived: true});
		}, 300);

		setTimeout(() => {
			setIsLoading(false)
		}, 2000)

		return () => clearInterval(interval);
	}, []);

	return (
		<MainLayout>
			{isLoading ? <Loader /> : <NotesList data={data} />}
		</MainLayout>
	);
};

export default ArchivedPage;
