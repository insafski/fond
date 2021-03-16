import React from "react";
import { gql, useQuery } from "@apollo/client";
import get from "lodash/get";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { client } from "../../utils/apollo";

const GET_DOGS = gql`
	query GetExchangeRates {
		pages {
			title
			id
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
				{fetchedData.pages.map((item) => (
					<li>{item.title}</li>
				))}
			</ul>
			{t("change-locale")}
			{t("change-locale")}
		</>
	);
}

const pathQuery = gql`
	query GetExchangeRates {
		pages {
			title
			id
		}
	}
`;

const contentQuery = (params) => gql`
	query GetExchangeRates {
		pages(where: { id: { _eq: ${params.id} } }) {
			title
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

	const paths = data.pages.map((news) => `/news/${news.id}`);

	return { paths, fallback: false };
}
