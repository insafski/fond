import React from "react";
import PropTypes from "prop-types";
import { isArray } from "lodash";

import breakpoints from "../../../configs/breackpoints";

export function Picture({ items }) {
	function makeSource(breakpoint, src, alt, title) {
		switch (breakpoint) {
			case "main":
				return <img className={"h-full object-none rounded-md"} src={src} alt={alt} title={title} />;
			default:
				return <source srcSet={src} media={`(min-width: ${breakpoints[breakpoint]})`} />;
		}
	}

	return isArray(items) && items.length && (
		<picture>
			{
				items.map(({ breakpoint, src, alt, title }) => makeSource(breakpoint, src, alt, title))
			}
		</picture>
	);
}

Picture.propTypes = {
	items: PropTypes.array,
};

Picture.defaultProps = {
	items: [],
};
