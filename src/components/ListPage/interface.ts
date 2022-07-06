import { NotesCardProps } from "../Card/interface";

export interface ListNotesProps extends NotesCardProps {
    objKey: string | null
    index?: number
}

export interface DataProps {
    data: ListNotesProps[]
    isArchived: boolean
}