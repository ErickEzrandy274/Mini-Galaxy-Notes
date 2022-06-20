import { Route, Routes } from "react-router";
import CreatePage from "./components/CreatePage/CreatePage";
import Home from "./components/HomePage/HomePage";
import ListPage from "./components/ListPage/ListPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/list" element={<ListPage />} />
			<Route path="/create" element={<CreatePage />} />
		</Routes>
	);
}

export default App;
