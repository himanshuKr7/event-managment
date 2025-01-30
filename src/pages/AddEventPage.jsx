import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuImageUp } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

export default function AddEventPage({ addEvent }) {
	const [form, setForm] = useState({
		community: "",
		title: "",
		dateTimeStart: "",
		dateTimeEnd: "",
		location: "",
		description: "",
		media: null,
		mediaPreview: "",
	});
	const navigate = useNavigate();
	useEffect(() => {
		return () => {
			if (form.mediaPreview) {
				URL.revokeObjectURL(form.mediaPreview);
			}
		};
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleMediaUpload = (e) => {
		const file = e.target.files[0];
		if (!file) return;
		const fileURL = URL.createObjectURL(file);
		console.log(fileURL); 
		setForm({ ...form, media: file, mediaPreview: fileURL });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!form.community ||
			!form.title ||
			!form.dateTimeStart ||
			!form.dateTimeEnd ||
			!form.location ||
			!form.description
		) {
			alert("Please fill in all required fields.");
			return;
		}
		addEvent(form);
		navigate("/");
	};

	return (
		<div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
			<h1 className="text-2xl font-semibold text-center mb-4">
				Create New Event
			</h1>

			<div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-white p-4 rounded-lg">
				<label className="cursor-pointer relative">
					<input
						type="file"
						accept="image/*,video/*"
						className="hidden"
						onChange={handleMediaUpload}
					/>
					<div className="w-60 h-40 bg-gray-200 flex items-center justify-center rounded-lg">
						{form.mediaPreview ? (
							form.media.type.startsWith("image/") ? (
								<img
									src={form.mediaPreview}
									className="w-full h-full object-cover rounded-lg"
									alt="Preview"
								/>
							) : (
								<video
									src={form.mediaPreview}
									className="w-full h-full rounded-lg"
									controls
								/>
							)
						) : (
							<div className="flex items-center gap-2 text-md bg-white p-2 rounded-md border">
								<LuImageUp className="size-5" />
								<span>Add Photo/Video</span>
							</div>
						)}
					</div>
				</label>
			</div>

			<form onSubmit={handleSubmit} className="space-y-4 mt-4">
				<label className="block text-gray-600">Select Community</label>
				<select
					name="community"
					value={form.community}
					onChange={handleChange}
					className="w-full p-2 border bg-gray-100 rounded-3xl outline-none">
					<option value="">Select Community</option>
					<option value="Indiranagar Run Club">Indiranagar Run Club</option>
					<option value="Bangalore Runners">Bangalore Runners</option>
					<option value="Mumbai Marathoners">Mumbai Marathoners</option>
				</select>

				<label className="block text-gray-600">
					Event Title <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					name="title"
					placeholder="Enter Event Title"
					value={form.title}
					onChange={handleChange}
					className="w-full p-2 border rounded-3xl outline-none"
					required
				/>

				<div className="space-y-2">
					<label className="block text-gray-600">Starts</label>
					<input
						type="datetime-local"
						name="dateTimeStart"
						value={form.dateTimeStart}
						onChange={handleChange}
						className="w-full p-2 border rounded-3xl outline-none"
						required
					/>

					<label className="block text-gray-600">Ends</label>
					<input
						type="datetime-local"
						name="dateTimeEnd"
						value={form.dateTimeEnd}
						onChange={handleChange}
						className="w-full p-2 border rounded-3xl outline-none"
						required
					/>
				</div>

				<label className="block text-gray-600 flex gap-2 align-center">
					<CiLocationOn className="size-6" />
					Location
				</label>
				<input
					type="text"
					name="location"
					placeholder="Enter Event Location"
					value={form.location}
					onChange={handleChange}
					className="w-full p-2 border rounded-3xl outline-none"
				/>

				<label className="block text-gray-600">
					Add Description <span className="text-red-500">*</span>
				</label>
				<textarea
					name="description"
					placeholder="Enter Event Description"
					value={form.description}
					onChange={handleChange}
					className="w-full p-2 border rounded"
					rows="4"
					required
				/>

				<button
					type="submit"
					className="w-full bg-purple-500 text-white py-2 rounded-md text-lg font-semibold">
					Create Event
				</button>
			</form>
		</div>
	);
}

