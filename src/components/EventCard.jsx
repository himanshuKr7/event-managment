import React from "react";
import { CiLocationOn } from "react-icons/ci";

const EventCard = ({ event }) => {
	return (
		<div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105">
			{event.mediaPreview && (
				<img
					src={event.mediaPreview}
					alt="Event"
					className="w-full h-50 object-cover"
				/>
			)}
			<div className="p-3">
				<p className="text-xs text-purple-500 font-semibold">🏃‍♂️ By Bhag Club</p>
				<h3 className="text-sm font-bold text-gray-900 mt-1">{event.title}</h3>
				<p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
					🕒{" "}
					{new Date(event.dateTimeStart).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</p>
				<p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
					<CiLocationOn className="text-red-500" /> {event.location}
				</p>
			</div>
		</div>
	);
};

export default EventCard;
