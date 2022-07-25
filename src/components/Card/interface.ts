export interface NotesCardProps {
	id: string;
	title: string;
	body: string;
	archived: boolean;
	createdAt: string;
	lastModified: string;
}

export type editDataType = { title: string; body: string };
