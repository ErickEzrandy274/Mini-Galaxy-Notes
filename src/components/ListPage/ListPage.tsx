/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { database } from "../../utils/firebase/firebase";
import { ref, onValue } from "firebase/database";
import NotesList from "../NotesList/NotesList";
import { ListNotesProps } from "./interface";
import MainLayout from "../MainLayout/MainLayout";

const ListPage = () => {
	const [data, setData] = useState<ListNotesProps[]>([] as any[]);
	const notesListRef = ref(database, "Notes");

	useEffect(() => {
		const getData = () => {
			const tempData: ListNotesProps[] = [];
			onValue(notesListRef, (snapshot) => {
				snapshot.forEach((childSnapshot) => {
					const { id, title, createdAt, body, archived } =
						childSnapshot.val();
					const newObject = {
						objKey: childSnapshot.key,
						id,
						title,
						body,
						archived,
						createdAt,
					};
					tempData.push(newObject);
				});
			});

			setData(tempData);
		};

		getData()

		const interval = setInterval(()=>{
			getData()
		   }, 300)
			 
			 
		return()=>clearInterval(interval)
	}, []);

	return (
		<MainLayout>
			<NotesList data={data} />
		</MainLayout>
	);
};

export default ListPage;
