import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoArrowBackOutline } from "react-icons/io5";

export default function EventDetails() {
	const { id } = useParams();
	const navigate = useNavigate();

	// Retrieve events from localStorage
	const events = JSON.parse(localStorage.getItem("events")) || [];
	const event = events[id];

	// Function to delete an event
	const handleDelete = () => {
		const updatedEvents = events.filter((_, index) => index !== parseInt(id));
		localStorage.setItem("events", JSON.stringify(updatedEvents));
		navigate("/"); // Redirect to the landing page after deletion
	};

	// Check if event exists
	if (!event) {
		return <p className="text-center text-red-500">Event not found!</p>;
	}

	return (
		<div className="min-h-screen bg-gray-100 p-4">
			<button
				className="flex items-center gap-2 text-blue-600 font-semibold mb-4"
				onClick={() => navigate(-1)}>
				<IoArrowBackOutline className="text-xl" /> Back
			</button>

			<div className="bg-white shadow-md rounded-lg overflow-hidden max-w-2xl mx-auto">
				{event.mediaPreview && (
					<img
						src={event.mediaPreview}
						alt="Event"
						className="w-full h-90 object-cover"
					/>
				)}
				<div className="p-4">
					<h2 className="text-2xl font-bold">{event.title}</h2>
					<p className="text-gray-500 text-sm mt-1">🏃‍♂️ By Bhag Club</p>

					<div className="mt-3">
						<p className="text-gray-600 flex items-center gap-2">
							🕒 <strong>Start:</strong>{" "}
							{new Date(event.dateTimeStart).toLocaleString()}
						</p>
						<p className="text-gray-600 flex items-center gap-2">
							🕒 <strong>End:</strong>{" "}
							{new Date(event.dateTimeEnd).toLocaleString()}
						</p>
					</div>

					<p className="text-gray-600 flex items-center gap-2 mt-3">
						<CiLocationOn className="text-red-500" /> {event.location}
					</p>

					<div className="mt-4">
						<h3 className="text-lg font-semibold">Description</h3>
						<p className="text-gray-700">{event.description}</p>
					</div>

					{/* Action buttons */}
					<div className="mt-6 flex gap-4">
						<button
							className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
							onClick={handleDelete}>
							Delete Event
						</button>
						<button
							className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
							onClick={() => navigate(`/edit-event/${id}`)}>
							Edit Event
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
