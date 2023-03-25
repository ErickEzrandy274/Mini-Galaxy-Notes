import { BaseSyntheticEvent, useCallback } from "react";

const useHandleChange = () => {
	const handleChange = useCallback((e: BaseSyntheticEvent, setData: any) => {
		const { name, value } = e.target;

		setData((prevData: any) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	}, []);

	return {
		handleChange,
	};
};

export default useHandleChange;
