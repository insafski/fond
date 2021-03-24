import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

export function Button(props) {
	return (
		<button className={cx("w-40 h-12 border border-black border-solid", { "bg-gray-200": props.disabled })} {...props}>
			{props.children}
		</button>
	);
}

Button.propTypes = {
	disabled: PropTypes.bool,
	children: PropTypes.node,
};

