import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventCard";

export default function EventList() {
	const [events, setEvents] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
		setEvents(storedEvents);
	}, []);

	const handleEventClick = (index) => {
		navigate(`/event/${index}`);
	};

	return (
		<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
			{events.map((event, index) => (
				<div key={index} onClick={() => handleEventClick(index)}>
					<EventCard event={event} />
				</div>
			))}
		</div>
	);
}
