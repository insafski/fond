import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default function Icon({ type, className, style }) {
	return (
		<i className={cx(`fscch-${type}`, className)} style={style} />
	);
}

Icon.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
};

Icon.defaultProps = {
	type: "",
	className: "",
	style: {},
};

Icon.displayName = "Icon";
