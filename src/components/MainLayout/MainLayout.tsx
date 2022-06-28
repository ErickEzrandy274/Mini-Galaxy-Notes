import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "../Header/Header";
import { MainLayoutProps } from "./interface";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<AnimatePresence>
			<div className="p-2">
				<Header />
				{children}
			</div>
		</AnimatePresence>
	);
};

export default MainLayout;
