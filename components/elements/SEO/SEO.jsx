import React from "react";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";

export default function SEO({ metadata }) {
	// Prevent errors if no metadata was set
	if (!metadata) {
		return null;
	}

	const { metaTitle, metaDescription, twitterCardType, twitterUsername } = metadata;

	return (
		<NextSeo
			title={metaTitle}
			description={metaDescription}
			openGraph={{
				// Title and description are mandatory
				title: metaTitle,
				description: metaDescription,
			}}
			// Only included Twitter data if we have it
			twitter={{
				...twitterCardType && { cardType: twitterCardType },
				...twitterUsername && { cardType: twitterUsername },
			}}
		/>
	);
}

SEO.propTypes = {
	metadata: PropTypes.shape({
		metaTitle: PropTypes.string.isRequired,
		metaDescription: PropTypes.string.isRequired,
		twitterCardType: PropTypes.string,
		twitterUsername: PropTypes.string,
	}),
};
