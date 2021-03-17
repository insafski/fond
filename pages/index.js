import { client } from "../utils/apollo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import get from "lodash/get";

import Page from "@/components/containers/Page";

import { PAGE } from "@/queries/queries.graphql";

export async function getStaticProps({ locale }) {
	const response = await client.query({
		query: PAGE,
		variables: {
			slug: "/",
		},
	});

	const page = get(response, "data.pages[0].data", null);

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

export default Page;
