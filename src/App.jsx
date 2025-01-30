import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AddEventPage from "./pages/AddEventPage";
import EventDetails from "./pages/EventDetails";
import EditEventPage from "./pages/EditEventPage";
const App = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		setEvents(JSON.parse(localStorage.getItem("events")) || []);
	}, []);

	const addEvent = (newEvent) => {
		const updatedEvents = [newEvent, ...events];
		setEvents(updatedEvents);
		localStorage.setItem("events", JSON.stringify(updatedEvents));
	};

	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage events={events} />} />
				<Route
					path="/add-event"
					element={<AddEventPage addEvent={addEvent} />}
				/>
				<Route path="/event/:id" element={<EventDetails events={events} />} />
				<Route path="/edit-event/:id" element={<EditEventPage />} />
			</Routes>
		</Router>
	);
};

export default App;
