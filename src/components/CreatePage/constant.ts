export type newNotesInputType = {
	name: "content" | "title";
	type: string | undefined;
};

export const newNotesInput: newNotesInputType[] = [
	{ name: "title", type: "text" },
	{ name: "content", type: undefined },
];
