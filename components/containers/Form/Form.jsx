import React from "react";
import PropTypes from "prop-types";
import RCForm from "rc-field-form";


export default function Form({ onFinish, children }) {
	return (
		<RCForm onFinish={onFinish}>
			{children}
		</RCForm>
	);
}

Form.propTypes = {
	onFinish: PropTypes.func,
	children: PropTypes.func,
};

Form.defaultProps = {
	onFinish: () => Function,
	children: () => {}
};

Form.displayName = "Form";
