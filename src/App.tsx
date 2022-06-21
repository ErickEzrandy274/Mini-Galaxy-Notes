import { Route, Routes } from "react-router";
import ArchivedPage from "./components/ArchivedPage/ArchivedPage";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import CreatePage from "./components/CreatePage/CreatePage";
import HomePage from "./components/HomePage/HomePage";
import ListPage from "./components/ListPage/ListPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/list" element={<ListPage />} />
			<Route path="/create" element={<CreatePage />} />
			<Route path="/archived" element={<ArchivedPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
