import { Route, Routes } from "react-router";
import CreatePage from "./components/CreatePage/CreatePage";
import Home from "./components/HomePage/HomePage";
import ListPage from "./components/ListPage/ListPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/list" element={<ListPage />} />
			<Route path="/create" element={<CreatePage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
