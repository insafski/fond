import React from "react";
import Form from "rc-field-form";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import cx from "classnames";

export default function Input({ id, label, error, rules, value, last, ...props }) {
	const { Field } = Form;

	return (
		<div className={cx({ "mb-5": !last })} key={id}>
			<label
				htmlFor={id}
				className={"pb-2 block"}
				key={`label=${id}`}
			>
				{label}
			</label>
			<Field name={id} rules={rules}>
				<input
					id={id}
					value={value} {...props}
					key={`input-${id}`}
					className={"w-full h-12 border border-black p-2"}
				/>
			</Field>
			<Error>{error}</Error>
		</div>
	);
}

Input.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	rules: PropTypes.array,
	value: PropTypes.string,
	error: PropTypes.array,
	last: PropTypes.bool,
};

Input.defaultProps = {
	id: uuidv4(),
	label: "",
	rules: [],
	value: "",
	error: [],
	last: false,
};

Input.displayName = "Input";

function Error({ children }) {
	return (
		<ul style={{ color: "red" }}>
			{children.map((error, idx) => (
				<li key={idx}>{error}</li>
			))}
		</ul>
	);
}

Error.propTypes = {
	children: PropTypes.any,
};
