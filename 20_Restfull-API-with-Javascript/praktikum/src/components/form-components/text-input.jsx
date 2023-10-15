import React from "react";
import { Controller } from "react-hook-form";

export const TextInput = ({
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
					name={name}
					role="input"
					type="text"
					className={`form-control input ${errors[name] ? "is-invalid" : ""}`}
					{...field}
				/>
			)}
		/>
		{errors[name] && (
			<div className="invalid-feedback">{errors[name].message}</div>
		)}
	</>
);
