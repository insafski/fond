import React from "react";
import PropTypes from "prop-types";
import RCForm from "rc-field-form";

// For more information see: https://github.com/react-component/field-form

export default function Form({ onFinish, children }) {
	return (
		<RCForm onFinish={onFinish}>
			{children}
		</RCForm>
	);
}

Form.propTypes = {
	onFinish: PropTypes.func,
	children: PropTypes.node,
};

Form.defaultProps = {
	onFinish: () => Function,
};

Form.displayName = "Form";
