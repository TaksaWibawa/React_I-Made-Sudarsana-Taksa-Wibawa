import React from "react";
import { Controller } from "react-hook-form";

export const RadioInput = ({
	label,
	name,
	control,
	rules,
	errors,
	options,
	defaultChecked,
}) => (
	<>
		<label className="form-label">{label}</label>
		<Controller
			name={name}
			control={control}
			rules={rules}
			defaultValue={defaultChecked}
			render={({ field }) => (
				<div className="radio-group">
					{options.map((option) => (
						<div
							key={option}
							className="form-check form-check-inline"
						>
							<input
								id={`${name}-${option}`}
								name={name}
								role="radio"
								type="radio"
								value={option}
								className="form-check-input"
								onChange={(e) => field.onChange(e.target.value)}
								checked={field.value === option}
							/>
							<label
								htmlFor={`${name}-${option}`}
								className="form-check-label"
							>
								{option}
							</label>
						</div>
					))}
				</div>
			)}
		/>
		{errors[name] && (
			<div className="invalid-feedback d-block !important">
				{errors[name].message}
			</div>
		)}
	</>
);
