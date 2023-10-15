import React from "react";
import { Controller } from "react-hook-form";

export const TextAreaInput = ({
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
				<textarea
					id={name}
					name={name}
					role="textbox"
					className={`form-control ${errors[name] ? "is-invalid" : ""}`}
					rows={7}
					{...field}
				/>
			)}
		/>
		{errors[name] && (
			<div className="invalid-feedback">{errors[name].message}</div>
		)}
	</>
);
