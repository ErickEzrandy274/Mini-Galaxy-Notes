import React from "react";
import Header from "../Header/Header";
import { MainLayoutProps } from "./interface";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="p-2">
			<Header />
			{children}
		</div>
	);
};

export default MainLayout;
