// reference link private route https://github.com/sairajchouhan/nextjs-firebase-auth/blob/main/pages/_app.tsx
import { Route, Routes } from "react-router";
import { lazy } from "react";
import {
	HomePage,
	Login,
	NotFound,
	ProtectedLayout,
	Register,
} from "./components";

function App() {
	const ListPage = lazy(() => import("./components/ListPage"));
	const CreatePage = lazy(() => import("./components/CreatePage/CreatePage"));
	const ArchivedPage = lazy(() => import("./components/ArchivedPage"));

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route
				path="/list"
				element={
				<ProtectedLayout>
					<ListPage />
				</ProtectedLayout>
			}
			/>
			<Route
				path="/create"
				element={
					<ProtectedLayout>
						<CreatePage />
					</ProtectedLayout>
				}
			/>
			<Route
				path="/archived"
				element={
					<ProtectedLayout>
						<ArchivedPage />
					</ProtectedLayout>
				}
			/>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
