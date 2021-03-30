import React, { createElement } from "react";
import get from "lodash/get";
import PropTypes from "prop-types";

import { client } from "@/utils/apollo";
import { ALL_NEWS } from "@/queries/queries.graphql";
import { News } from "@/components/sections/News";
import { NewsProvider } from "@/components/sections/News";

export default function AllNew({ news }) {
	return (
		<NewsProvider>
			{
				createElement(
					News,
					{
						key: "news",
						heading: { title: "Новости" },
						items: news,
					},
				)
			}
		</NewsProvider>
	);
}

AllNew.propTypes = {
	news: PropTypes.array,
};

AllNew.defaultProps = {
	news: [],
};

export async function getStaticProps() {
	const response = await client.query({
		query: ALL_NEWS,
		limit: 9,
	});

	const news = get(response, "data.news", []);

	if (!news) {
		console.error("Error while fetching");

		return {
			notFound: true,
		};
	}

	return {
		props: {
			// ...await serverSideTranslations(locale, ["common"]),
			news,
		},
	};
}
