import React from "react";
import PropTypes from "prop-types";
import { isArray } from "lodash";

import breakpoints from "../../../configs/breackpoints";

export default function Picture({ items, className }) {
	function makeSource(breakpoint, src, alt, title) {
		switch (breakpoint) {
			case "main":
				return <img src={src} alt={alt} title={title} />;
			default:
				return <source srcSet={src} media={`(min-width: ${breakpoints[breakpoint]})`} />;
		}
	}

	return isArray(items) && items.length && (
		<picture className={className}>
			{
				items.map(({ breakpoint, src, alt, title }) => makeSource(breakpoint, src, alt, title))
			}
		</picture>
	);
}

Picture.propTypes = {
	items: PropTypes.array,
	className: PropTypes.string,
};

Picture.defaultProps = {
	items: [],
	className: "",
};

Picture.displayName = "Picture";
