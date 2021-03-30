import React from "react";
import get from "lodash/get";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Page from "@/components/containers/Page";
import { PAGES, PAGE } from "@/queries/queries.graphql";
import { client } from "@/utils/apollo";

export default function Main(props) {
	return <Page {...props} />;
}

export async function getStaticPaths() {
	const response = await client.query({
		query: PAGES,
	});

	const pages = get(response, "data.pages", []);

	const paths = pages.map(({ slug }) => {
		return ["en", "ru", "el", "sr", "fr", "ge", "al", "ae", "he", "tr", "cn", "ja"].map(locale => {
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
		query: PAGE,
		variables: {
			slug,
		},
	});

	const page = get(response, "data.page[0].sections", null);

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
		},
	};
}
