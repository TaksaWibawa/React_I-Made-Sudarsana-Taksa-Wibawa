import React from "react";
import { Controller } from "react-hook-form";

export const NumberInput = ({
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
					type="number"
					className={`form-control input ${errors[name] ? "is-invalid" : ""}`}
					placeholder={`$ 1`}
					{...field}
				/>
			)}
		/>
		{errors[name] && (
			<div className="invalid-feedback">{errors[name].message}</div>
		)}
	</>
);
