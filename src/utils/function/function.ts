import { onValue, ref, remove, update } from "firebase/database";
import React, { SetStateAction } from "react";
import { ListNotesProps } from "../../components/ListPage/interface";
import { database } from "../firebase/firebase";

type getDataParams = {
	setData: React.Dispatch<SetStateAction<ListNotesProps[]>>;
	isArchived: boolean;
	uid: string;
};

export const notesListRef = ref(database, "Notes");

export const getData = (item: getDataParams) => {
	const { setData, isArchived, uid } = item;
	const tempData: ListNotesProps[] = [];
	onValue(notesListRef, (snapshot) => {
		snapshot.forEach((childSnapshot) => {
			const {
				id,
				title,
				createdAt,
				body,
				archived,
				lastModified,
				userId,
			} = childSnapshot.val();
			if (archived === isArchived && uid === userId) {
				const newObject = {
					objKey: childSnapshot.key,
					id,
					title,
					body,
					archived,
					createdAt,
					lastModified,
					userId,
				};
				tempData.push(newObject);
			}
		});
	});

	setData(tempData);
};

export const deleteCard = async (objKey: string) => {
	try {
		await remove(ref(database, `Notes/${objKey}`));
	} catch (error) {
		console.log(error);
	}
};

export const updateCard = async (objKey: string, prevArchived: boolean) => {
	try {
		await update(ref(database, `Notes/${objKey}`), {
			archived: !prevArchived,
			lastModified: new Date().toISOString(),
		});
	} catch (error) {
		console.log(error);
	}
};

export const extractError = (err: any) => {
	const { code } = err;
	const newError = code.substring(5).split("-");
    newError[0] = newError[0].substring(0, 1).toUpperCase() + newError[0].substring(1);
    return newError.join(" ")
};
