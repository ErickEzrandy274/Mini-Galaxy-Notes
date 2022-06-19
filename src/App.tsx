import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import NotesForm from "./components/NotesCreate/NotesForm";
import NotesList from "./components/NotesList/NotesList";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
      <Route path="list" element={<NotesList />} />
      <Route path="create" element={<NotesForm />} />
		</Routes>
	);
}

export default App;
