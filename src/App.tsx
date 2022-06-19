import React from "react";
import { Route, Routes } from "react-router";
import CreatePage from "./components/CreatePage/CreatePage";
import Home from "./components/HomePage/HomePage";
import NotesList from "./components/NotesList/NotesList";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
      <Route path="list" element={<NotesList />} />
      <Route path="create" element={<CreatePage />} />
		</Routes>
	);
}

export default App;
