import { gql, useQuery } from "@apollo/client";
import get from "lodash/get";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { client } from "../../utils/apollo";

const GET_DOGS = gql`
	query GetExchangeRates {
		news(limit: 10) {
			published_at
			type
		}
	}
`;
export default function News({ data }) {

	const { t } = useTranslation("common");

	const { loading, error, data: fetchedData } = useQuery(GET_DOGS);

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	return (
		<>
			{t("change-locale")}
			{t("change-locale")}
			<div className={"testStyle"}>{get(data.news[0], "page_title_full", "")}</div>
			<ul>
				{fetchedData.news.map((item) => (
					<li>{item.type}</li>
				))}
			</ul>
			{t("change-locale")}
			{t("change-locale")}
		</>
	);
}

const pathQuery = gql`
	query GetExchangeRates {
		news(limit: 10) {
			category_id
			page_title_full
			id
		}
	}
`;

const contentQuery = (params) => gql`
	query GetExchangeRates {
		news(where: { id: { _eq: ${params.id} } }) {
			category_id
			page_title_full
			id
		}
	}
`;

export async function getStaticProps({ params, locale }) {
	const { data } = await client.query({
		query: contentQuery(params),
	});
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			data: data,
		},
	};
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: pathQuery,
	});

	const paths = data.news.map((news) => `/news/${news.id}`);

	return { paths, fallback: false };
}
