import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import get from "lodash/get";
import PropTypes from "prop-types";

import Page from "@/components/containers/Page";
import { client } from "@/utils/apollo";
import { MAIN_PAGE } from "@/queries/queries.graphql";

export default function Main(props) {
	const news = get(props, "news", []);

	// add news items to section with content-type equal news, from MAIN_PAGE query
	const sections = get(props, "sections", []).map(sections => {
		if (sections.component === "news") {
			return {
				...sections,
				items: news,
			};
		}

		return sections;
	});

	return (
		<Page {...props} sections={sections} mainPage />
	);
}

Main.propTypes = {
	sections: PropTypes.array,
	news: PropTypes.array,
};

export async function getStaticProps({ locale }) {
	const response = await client.query({
		query: MAIN_PAGE,
	});

	const page = get(response, "data.page[0]", {});
	const news = get(response, "data.news", []);

	if (!page) {
		console.error("Error while fetching");

		return {
			notFound: true,
		};
	}

	return {
		props: {
			...await serverSideTranslations(locale, ["common"]),
			...page,
			news,
		},
	};
}
