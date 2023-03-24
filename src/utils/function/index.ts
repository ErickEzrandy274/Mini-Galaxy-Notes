import React, { SetStateAction } from "react";
import { onValue, ref, remove, update, push } from "firebase/database";
import { editDataType, inputObj, InputType, ListNotesProps } from "components";
import { database } from "../firebase";
import { NavigateFunction } from "react-router";
import { v4 as uuidv4 } from "uuid";

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

export type paramsType = {
	e: any;
	title: string;
	body: string;
	uid: string;
	navigate: NavigateFunction;
	toast: any;
	setField: (value: React.SetStateAction<InputType>) => void;
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

export const updateArchivedCard = async (
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

export const updateContentCard = async (
	item: notesListRefParams,
	title: string,
	body: string
) => {
	const { uid, type, objKey } = item;
	try {
		await update(notesListRef({ uid, type, objKey }), {
			title,
			body,
			lastModified: new Date().toISOString(),
		});
	} catch (error) {
		console.log(error);
	}
};

export const extractError = (err: any) => {
	const { code } = err;
	const newError = code.substring(5).split("-");
	newError[0] = toCapitalize(newError[0]);
	return `${newError.join(" ")}!`;
};

export const toCapitalize = (text: string) => {
	return text.substring(0, 1).toUpperCase() + text.substring(1);
};

export const isNoteContentChange = (
	oldContentCard: editDataType,
	newContentCard: editDataType
) => {
	const { title: oldTitle, body: oldBody } = oldContentCard;
	const { title: newTitle, body: newBody } = newContentCard;

	if (oldTitle !== newTitle) return true;
	if (oldBody !== newBody) return true;

	return false;
};

export const dateFormat = (date: string) => {
	return Intl.DateTimeFormat("en-us", {
		dateStyle: "long",
		timeStyle: "medium",
	}).format(new Date(date));
};

export const handleSubmit = async ({
	e,
	title,
	body,
	navigate,
	setField,
	toast,
	uid,
}: paramsType) => {
	e.preventDefault();
	try {
		if (title.length < 51) {
			const newDate = new Date().toISOString();

			const newNotes = {
				id: uuidv4(),
				title,
				body,
				archived: false,
				createdAt: newDate,
				lastModified: newDate,
			};

			await push(notesListRef({ uid, type: "create", objKey: "" }), newNotes);

			navigate("/list");
		} else {
			toast(`Your new notes title is more than 50 character!`);
		}

		setField(inputObj);
	} catch (error) {
		console.error(error);
	}
};
