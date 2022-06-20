import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { MainLayoutProps } from "./interface";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
