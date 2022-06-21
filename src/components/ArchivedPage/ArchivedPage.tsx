import { useEffect, useState } from "react";
import { getData } from "../../utils/function/function";
import { ListNotesProps } from "../ListPage/interface";
import MainLayout from "../MainLayout/MainLayout";
import NotesList from "../NotesList/NotesList";

const ArchivedPage = () => {
	const [data, setData] = useState<ListNotesProps[]>([] as any[]);

	useEffect(() => {
		getData({setData, isArchived: true});

		const interval = setInterval(() => {
			getData({setData, isArchived: true});
		}, 300);

		return () => clearInterval(interval);
	}, []);

	return (
		<MainLayout>
			<NotesList data={data} />
		</MainLayout>
	);
};

export default ArchivedPage;
