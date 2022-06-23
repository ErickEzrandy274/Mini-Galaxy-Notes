import { onValue, ref, remove, update } from "firebase/database";
import React, { SetStateAction } from "react";
import { ListNotesProps } from "../../components/ListPage/interface";
import { database } from "../firebase/firebase";

type getDataParams = {
	setData: React.Dispatch<SetStateAction<ListNotesProps[]>>;
	isArchived: boolean;
	uid: string;
};

type notesListRefParams = {
	uid: string;
	type: "get" | "delete" | "update" | "create";
	objKey: string;
};

export const notesListRef = (refParam: notesListRefParams) => {
	const { uid, type, objKey } = refParam;
	return type === "get" || type === "create"
		? ref(database, `Notes/${uid}`)
		: ref(database, `Notes/${uid}/${objKey}`);
};

export const getData = (item: getDataParams) => {
	const { setData, isArchived, uid } = item;
	const tempData: ListNotesProps[] = [];
	onValue(notesListRef({ uid, type: "get", objKey: "" }), (snapshot) => {
		snapshot.forEach((childSnapshot) => {
			const { id, title, createdAt, body, archived, lastModified } =
				childSnapshot.val();
			if (archived === isArchived) {
				const newObject = {
					objKey: childSnapshot.key,
					id,
					title,
					body,
					archived,
					createdAt,
					lastModified,
				};
				tempData.push(newObject);
			}
		});
	});

	setData(tempData);
};

export const deleteCard = async (item: notesListRefParams) => {
	const { uid, type, objKey } = item;
	try {
		await remove(notesListRef({ uid, type, objKey }));
	} catch (error) {
		console.log(error);
	}
};

export const updateCard = async (
	item: notesListRefParams,
	prevArchived: boolean
) => {
	const { uid, type, objKey } = item;
	try {
		await update(notesListRef({ uid, type, objKey }), {
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
	newError[0] =
		newError[0].substring(0, 1).toUpperCase() + newError[0].substring(1);
	return newError.join(" ");
};
