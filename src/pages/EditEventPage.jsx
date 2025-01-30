import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditEventPage() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [event, setEvent] = useState({
		title: "",
		dateTimeStart: "",
		dateTimeEnd: "",
		location: "",
		description: "",
		mediaPreview: "",
	});

	useEffect(() => {
		const events = JSON.parse(localStorage.getItem("events")) || [];
		const currentEvent = events[id];
		if (currentEvent) {
			setEvent(currentEvent);
		}
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEvent((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSave = () => {
		const events = JSON.parse(localStorage.getItem("events")) || [];
		events[id] = event;
		localStorage.setItem("events", JSON.stringify(events));
		navigate(`/event/${id}`);
	};

	return (
		<div className="min-h-screen bg-gray-100 p-4">
			<h2 className="text-2xl font-bold mb-4">Edit Event</h2>
			<div className="bg-white shadow-md rounded-lg p-6">
				<label className="block mb-2">
					Title:
					<input
						type="text"
						name="title"
						value={event.title}
						onChange={handleChange}
						className="w-full p-2 mt-2 border border-gray-300 rounded"
					/>
				</label>

				<label className="block mb-2">
					Date and Time Start:
					<input
						type="datetime-local"
						name="dateTimeStart"
						value={event.dateTimeStart}
						onChange={handleChange}
						className="w-full p-2 mt-2 border border-gray-300 rounded"
					/>
				</label>

				<label className="block mb-2">
					Date and Time End:
					<input
						type="datetime-local"
						name="dateTimeEnd"
						value={event.dateTimeEnd}
						onChange={handleChange}
						className="w-full p-2 mt-2 border border-gray-300 rounded"
					/>
				</label>

				<label className="block mb-2">
					Location:
					<input
						type="text"
						name="location"
						value={event.location}
						onChange={handleChange}
						className="w-full p-2 mt-2 border border-gray-300 rounded"
					/>
				</label>

				<label className="block mb-2">
					Description:
					<textarea
						name="description"
						value={event.description}
						onChange={handleChange}
						className="w-full p-2 mt-2 border border-gray-300 rounded"
					/>
				</label>

				<label className="block mb-2">
					Media Preview URL:
					<input
						type="text"
						name="mediaPreview"
						value={event.mediaPreview}
						onChange={handleChange}
						className="w-full p-2 mt-2 border border-gray-300 rounded"
					/>
				</label>

				<div className="mt-4">
					<button
						className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
						onClick={handleSave}>
						Save Changes
					</button>
				</div>
			</div>
		</div>
	);
}
