import { AnimatePresence } from "framer-motion";
import { MainLayoutProps } from "./interface";
import Toaster from "../Toaster";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<AnimatePresence>
			<div className="flex flex-col justify-between min-h-screen">
				<Header />
				{children}
				<Footer />
				<Toaster />
			</div>
		</AnimatePresence>
	);
};

export default MainLayout;
