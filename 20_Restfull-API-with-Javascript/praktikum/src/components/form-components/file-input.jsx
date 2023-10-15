import React from "react";
import { Controller } from "react-hook-form";

export const FileInput = ({
	label,
	name,
	control,
	rules,
	defaultValue,
	errors,
}) => (
	<>
		<label
			htmlFor={name}
			className="form-label"
		>
			{label}
		</label>
		<Controller
			name={name}
			control={control}
			rules={rules}
			defaultValue={defaultValue}
			render={({ field }) => (
				<input
					id={name}
					type="file"
					role="input"
					className={`form-control input image ${
						errors[name] ? "is-invalid" : ""
					}`}
					accept="image/*"
					onChange={(e) => {
						const file = e.target.files[0];
						field.onChange(file);
					}}
				/>
			)}
		/>
		{errors[name] && (
			<div className="invalid-feedback">{errors[name].message}</div>
		)}
	</>
);
