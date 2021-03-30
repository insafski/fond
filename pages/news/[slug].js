import React from "react";
import get from "lodash/get";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Page from "@/components/containers/Page";
import { ALL_NEWS, NEWS_ITEM } from "@/queries/queries.graphql";
import { client } from "@/utils/apollo";
import { locales } from "@/utils/localesConfig";

export default function News(props) {
	return <Page {...props} />;
}

export async function getStaticPaths() {
	const response = await client.query({
		query: ALL_NEWS,
	});

	const news = get(response, "data.news", []);
	const paths = news.map(({ slug }) => {
		return locales.map(locale => {
			return {
				params: {
					slug,
				},
				locale,
			};
		});
	});

	return {
		paths: paths.flat(),
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug }, locale }) {
	const response = await client.query({
		query: NEWS_ITEM,
		variables: {
			slug,
		},
	});

	const news_item = get(response, "data.news[0]", null);

	if (!news_item) {
		console.error("Error while fetching");

		return {
			notFound: true,
		};
	}

	return {
		props: {
			...await serverSideTranslations(locale, ["common"]),
			...news_item,
		},
	};
}
