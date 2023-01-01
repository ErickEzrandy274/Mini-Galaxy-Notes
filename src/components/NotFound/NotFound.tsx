import { useNavigate } from "react-router";

const NotFound = () => {
	const nav = useNavigate();

	return (
		<div className="bg-indigo-900 relative overflow-hidden h-screen">
			<img
				src="/not-found.svg"
				className="absolute h-full w-full object-cover"
				alt="error cover page"
			/>
			<div className="inset-0 bg-black opacity-25 absolute"></div>
			<div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-20 xl:py-40">
				<div className="w-full font-mono flex flex-col items-center relative z-10">
					<h1 className="font-extrabold text-5xl text-center text-white leading-tight">
						You&#x27;re alone here
					</h1>
					<p className="font-extrabold text-8xl my-20 text-white animate-bounce">
						404
					</p>

					<div
						onClick={() => nav("/list")}
						className="text-2xl lg:text-5xl tracking-wide uppercase text-gray-300 hover:text-white font-bold underline cursor-pointer"
					>
						back to home
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
