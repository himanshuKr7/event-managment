import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="bg-blue-100  text-gray-700 p-4 flex justify-around items-center">
			<h1 className="text-2xl font-bold">Event Management</h1>
			<Link
				to="/add-event"
				className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
				Add Event
			</Link>
		</nav>
	);
}
