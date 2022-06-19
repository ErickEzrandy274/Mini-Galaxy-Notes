import React from "react";
import Header from "../Header/Header";
import { MainLayoutProps } from "./interface";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen">
			<Header />
			{children}
		</div>
	);
};

export default MainLayout;
