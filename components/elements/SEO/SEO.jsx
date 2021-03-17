import React from "react";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";

export default function SEO({ metadata }) {
	// Prevent errors if no metadata was set
	if (!metadata) {
		return null;
	}

	return (
		<NextSeo
			title={metadata.metaTitle}
			description={metadata.metaDescription}
			openGraph={{
				// Title and description are mandatory
				title: metadata.metaTitle,
				description: metadata.metaDescription,
			}}
			// Only included Twitter data if we have it
			twitter={{
				...metadata.twitterCardType && { cardType: metadata.twitterCardType },
				...metadata.twitterUsername && { cardType: metadata.twitterUsername },
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
