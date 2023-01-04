import { useCallback, useState } from "react";
import { getData } from "../function";
import { ListNotesProps } from "components";

const useHTTP = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<ListNotesProps[]>([]);

	// using useCallback hooks to avoid re-execute in useEffect
	const sendRequest = useCallback((uid: string, isArchived = true) => {
		setIsLoading(true);
		getData({ setData, isArchived, uid });

		const interval = setInterval(() => {
			getData({ setData, isArchived, uid });
		}, 300);

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return {
		isLoading,
		data,
		sendRequest,
	};
};

export default useHTTP;
