import { NotesCardProps } from "../Card/interface";

export interface ListNotesProps extends NotesCardProps {
    objKey: string | null
}

export interface DataProps {
    data: ListNotesProps[]
}