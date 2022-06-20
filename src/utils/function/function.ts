import { onValue, ref, remove, update } from "firebase/database";
import React, { SetStateAction } from "react";
import { ListNotesProps } from "../../components/ListPage/interface";
import { database } from "../firebase/firebase";

export const notesListRef = ref(database, "Notes");

export const getData = (setData: React.Dispatch<SetStateAction<ListNotesProps[]>>) => {
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

export const deleteCard = async (objKey: string) => {
    try {
        await remove(ref(database, `Notes/${objKey}`))
    } catch (error) {
        console.log(error)
    }
}

export const updateCard = async (objKey: string, prevArchived: boolean) => {
    try {
        await update(ref(database, `Notes/${objKey}`), {
            archived: !prevArchived
        })
    } catch (error) {
        console.log(error)
    }
}