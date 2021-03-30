import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import get from "lodash/get";

import Page from "@/components/containers/Page";
import { client } from "@/utils/apollo";
import { PAGE } from "@/queries/queries.graphql";

export default function Main(props) {
	return (
		<Page {...props} />
	);
}

export async function getStaticProps({ locale }) {
	const response = await client.query({
		query: PAGE,
		variables: {
			slug: "/",
		},
	});

	const page = get(response, "data.page[0]", null);

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
