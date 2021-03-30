import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

export function Button({ children, className, text }) {
	return (
		<button className={cx("bg-gold px-2 py-1", className)}>
			{text}
			{children}
		</button>
	);
}

Button.propTypes = {
	disabled: PropTypes.bool,
	className: PropTypes.string,
	text: PropTypes.string,
	children: PropTypes.node,
};

Button.defaultProps = {
	disabled: false,
	className: "",
	text: "",
	children: null,
};

