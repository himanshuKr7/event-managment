import React from "react";
import Navbar from "../components/Navbar";
import EventList from "../components/EventList";

const LandingPage = () => {
	return (
		<div className="bg-white min-h-screen">
			<Navbar />
			<div className="px-4 py-6 max-w-4xl mx-auto">
				<h1 className="text-xl font-bold text-black">Delhi NCR</h1>
				<p className="text-gray-500 text-sm">Welcome to the tribe!</p>
				<div className="flex border-b mt-4">
					<button className="text-blue-600 font-semibold px-4 py-2 border-b-2 border-blue-600">
						Events
					</button>
					<button className="text-gray-400 px-4 py-2">Communities</button>
				</div>
				<EventList />
			</div>
		</div>
	);
};

export default LandingPage;
