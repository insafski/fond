import React from "react";
import PropTypes from "prop-types";

import Section from "@/components/containers/Section";

export default function Text({ heading }) {
	return (
		<Section heading={heading} className={"text"}>

		</Section>
	);
}

Text.propTypes = {
	heading: PropTypes.shape({
		title: PropTypes.string,
		subTitle: PropTypes.string,
		subText: PropTypes.string,
	}),
};
