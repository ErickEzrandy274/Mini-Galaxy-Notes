import NewLink from "../NewLink/NewLink";

const NotFound = () => {
	return (
		<div className="bg-indigo-900 relative overflow-hidden h-screen">
			<img
				src="/not-found.svg"
                className="absolute h-full w-full object-cover"
                alt="error cover page"
			/>
			<div className="inset-0 bg-black opacity-25 absolute"></div>
			<div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
				<div className="w-full font-mono flex flex-col items-center relative z-10">
					<h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
						You&#x27;re alone here
					</h1>
					<p className="font-extrabold text-8xl my-44 mb-24 text-white animate-bounce">
						404
                    </p>
                    
                    <NewLink
						to="/"
						linkName="BACK TO HOME"
                        fromNav
                        customClass="bg-blue-700 hover:bg-blue-800 py-3 px-4 text-xl text-white font-bold rounded-lg shadow-xl tracking-wider"
					/>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
