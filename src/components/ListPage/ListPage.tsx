import { useState, useEffect } from "react";
import NotesList from "../NotesList/NotesList";
import { ListNotesProps } from "./interface";
import MainLayout from "../MainLayout/MainLayout";
import { getData } from "../../utils/function/function";

const ListPage = () => {
	const [data, setData] = useState<ListNotesProps[]>([] as any[]);

	useEffect(() => {
		getData(setData, false)

		const interval = setInterval(()=>{
			getData(setData, false)
		   }, 300)
			 
			 
		return () => clearInterval(interval)
	}, []);

	return (
		<MainLayout>
			<NotesList data={data} />
		</MainLayout>
	);
};

export default ListPage;
