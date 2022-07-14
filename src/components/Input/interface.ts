export interface InputProps {
	type: "title" | "body";
	title?: string;
	body?: string;
	handleChange: (e: any) => void;
}
