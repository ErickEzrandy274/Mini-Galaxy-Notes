// reference link private route https://github.com/sairajchouhan/nextjs-firebase-auth/blob/main/pages/_app.tsx
import { Route, Routes } from "react-router";
import ArchivedPage from "./components/ArchivedPage/ArchivedPage";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ScrollButton from "./components/Button/ScrollButton";
import CreatePage from "./components/CreatePage/CreatePage";
import HomePage from "./components/HomePage/HomePage";
import ListPage from "./components/ListPage/ListPage";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

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
