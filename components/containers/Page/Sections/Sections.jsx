import React, { createElement } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import sectionsHashMap from "@/components/sections";

export default function Sections({ sections, newsPage, mainPage }) {
	return (
		<div className={"flex flex-col"}>
			{
				(sections || []).map((section, idx) => {
					const component = get(section, "component", "");
					const heading = {
						title: get(section, "title"),
						subTitle: get(section, "subtitle"),
						subText: get(section, "description"),
					};

					return createElement(
						sectionsHashMap.get(component),
						{
							key: `${component}-${idx}`,
							heading,
							...section,
							newsPage,
							mainPage,
						},
					);
				})
			}
		</div>
	);
}

Sections.propTypes = {
	sections: PropTypes.array,
	manufacturers: PropTypes.array,
	newsPage: PropTypes.bool,
	mainPage: PropTypes.bool,
};

Sections.deafaultProps = {
	sections: [],
	manufacturers: [],
	newsPage: false,
	mainPage: false,
};

Sections.displayName = "Sections";
