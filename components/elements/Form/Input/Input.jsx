import React from "react";
import styled from "styled-components";
import Form from "rc-field-form";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const StyledInput = styled.input`
    width: 100%;
    height: 3rem;
    border: black solid 1px;
`;

export const StyledLabel = styled.label`
`;

export default function Input({ id, label, error, rules, value, ...props }) {
	const { Field } = Form;

	const Error = ({ children }) => (
		<ul style={{ color: "red" }}>
			{children.map(error => (
				<li>{error}</li>
			))}
		</ul>
	);

	return (
		<div key={id}>
			<StyledLabel key={`label=${id}`} htmlFor={id}>{label}</StyledLabel>
			<Field name={id} rules={rules}>
				<StyledInput key={`input-${id}`} id={id} value={value} {...props} />
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
};

Input.defaultProps = {
	id: uuidv4(),
	label: "",
	rules: [],
	value: "",
	error: [],
};

Input.displayName = "Input";
