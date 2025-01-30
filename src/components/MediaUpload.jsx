import React from "react";

const MediaUpload = ({ setForm, form }) => {
	const handleMediaUpload = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (event) => {
			setForm({ ...form, media: file, mediaPreview: event.target.result });
		};
		reader.readAsDataURL(file);
	};

	return (
		<div>
			<input
				type="file"
				accept="image/*,video/*"
				onChange={handleMediaUpload}
				className="w-full p-2 border rounded"
			/>
			{form.mediaPreview && (
				<img
					src={form.mediaPreview}
					alt="Preview"
					className="w-full max-h-48 object-cover mt-2"
				/>
			)}
		</div>
	);
};

export default MediaUpload;
