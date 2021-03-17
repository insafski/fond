import React from "react";
import PropTypes from "prop-types";
import RCMenu from "rc-menu";

export default function Menu({ children, className, mode, activeKey, defaultActiveFirst, multiple, onClick, selectable }) {
	return (
		<RCMenu
			className={className}
			mode={mode}
			activeKey={activeKey}
			defaultActiveFirst={defaultActiveFirst}
			multiple={multiple}
			onClick={onClick}
			selectable={selectable}
		>
			{children}
		</RCMenu>
	);
}

Menu.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	mode: PropTypes.string,
	activeKey: PropTypes.string,
	defaultActiveFirst: PropTypes.bool,
	multiple: PropTypes.bool,
	onClick: PropTypes.func,
	selectable: PropTypes.bool,
};

Menu.defaultProps = {
	children: "",
	className: "",
	mode: "",
	activeKey: "",
	defaultActiveFirst: false,
	multiple: false,
	onClick: () => Function,
	selectable: false,
};

Menu.displayName = "Menu";
