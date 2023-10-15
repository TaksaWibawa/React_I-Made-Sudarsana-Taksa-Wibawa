import React from "react";
import { Controller } from "react-hook-form";

export const SelectInput = ({
	label,
	name,
	control,
	rules,
	errors,
	options,
	defaultValue,
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
				<select
					id={name}
					name={name}
					role="combobox"
					className={`form-select input ${errors[name] ? "is-invalid" : ""}`}
					{...field}
				>
					{options.map((option) => (
						<option
							key={option}
							value={option}
						>
							{option}
						</option>
					))}
				</select>
			)}
		/>
		{errors[name] && (
			<div className="invalid-feedback">{errors[name].message}</div>
		)}
	</>
);
