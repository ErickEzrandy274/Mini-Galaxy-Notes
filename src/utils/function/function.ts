import { onValue, ref } from "firebase/database";
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