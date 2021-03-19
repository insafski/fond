import React from "react";
import PropTypes from "prop-types";
import RCDropdown from "rc-dropdown";

import "rc-dropdown/assets/index.css";

export default function Dropdown({ trigger, overlay, animation, children, overlayClassName }) {
	return (
		<RCDropdown
			trigger={trigger}
			overlay={overlay}
			animation={animation}
			overlayClassName={overlayClassName}
		>
			{children}
		</RCDropdown>
	);
}

Dropdown.propTypes = {
	trigger: PropTypes.array,
	overlay: PropTypes.object,
	animation: PropTypes.string,
	children: PropTypes.node,
	overlayClassName: PropTypes.string,
};

Dropdown.defaultProps = {
	trigger: [],
	overlay: "",
	animation: "",
	children: () => Function,
	overlayClassName: "",
};

Dropdown.displayName = "Dropdown";
