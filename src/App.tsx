// reference link private route https://github.com/sairajchouhan/nextjs-firebase-auth/blob/main/pages/_app.tsx
import { Route, Routes } from "react-router";
import {
	ArchivedPage,
	CreatePage,
	HomePage,
	ListPage,
	Login,
	NotFound,
	ProtectedRoute,
	Register,
	ScrollButton,
} from "./components";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route
				path="/list"
				element={
					<ProtectedRoute>
						<ScrollButton />
						<ListPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/create"
				element={
					<ProtectedRoute>
						<ScrollButton />
						<CreatePage />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/archived"
				element={
					<ProtectedRoute>
						<ScrollButton />
						<ArchivedPage />
					</ProtectedRoute>
				}
			/>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
