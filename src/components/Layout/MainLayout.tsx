import React from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster, Footer, Header, MainLayoutProps } from "components";

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
