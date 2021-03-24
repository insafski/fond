import React from "react";
import PropTypes from "prop-types";
import RCForm from "rc-field-form";
// import { useTranslation } from "next-i18next";

export default function Form({ onFinish, onValuesChange, onFieldsChange, children }) {
	return (
		<RCForm
			onFinish={onFinish}
			onValuesChange={onValuesChange}
			onFieldsChange={onFieldsChange}
			// validateMessages={t("defaultValidateMessages")}
		>
			{children}
		</RCForm>
	);
}

Form.propTypes = {
	onFinish: PropTypes.func,
	onValuesChange: PropTypes.func,
	onFieldsChange: PropTypes.func,
	children: PropTypes.func,
};

Form.defaultProps = {
	onFinish: () => Function,
	onValuesChange: () => Function,
	onFieldsChange: () => Function,
	children: () => {},
};

Form.displayName = "Form";
