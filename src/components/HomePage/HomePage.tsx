import NewLink from "../NewLink/NewLink";

const HomePage = () => {
	return (
		<div className="bg-indigo-900 relative overflow-hidden h-screen cursor-default">
			<img
				src="https://www.tailwind-kit.com/images/landscape/6.svg"
				className="absolute h-full w-full object-cover"
				alt="cover page"
			/>
			<div className="inset-0 bg-black opacity-25 absolute"></div>
			<div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
				<div className="w-full flex flex-col items-center relative z-10">
					<h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
						Welcome to Notes Application
					</h1>
					<NewLink
						to="/list"
						linkName="START NOW"
						fromNav={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
