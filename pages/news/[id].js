import React from "react";
import { gql, useQuery } from "@apollo/client";
import get from "lodash/get";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { withRouter } from "next/router";

import {GET_EXCHANGE_RATES_NEWS} from "@/components/queries/queries.graphql";
import { client } from "../../utils/apollo";

export default function News({ data }) {


	const { t } = useTranslation("common");

	const { loading, error, data: fetchedData } = useQuery(GET_EXCHANGE_RATES_NEWS);

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	return (
		<>
			{t("change-locale")}
			{t("change-locale")}
			<div
				className={"testStyle"}
				style={{ fontSize: "10rem" }}>
				{get(data, "cities[0].page_title_short", "")}
			</div>
			<ul>
				{fetchedData.cities.map((item) => (
					<li>{item.page_title_short}</li>
				))}
			</ul>
			{t("change-locale")}
			{t("change-locale")}
		</>
	);
}

const contentQuery = (params) => gql`
	query GetExchangeRates {
		cities(where: { id: { _eq: ${params.id} } }) {
			id
			page_title_short
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
		query: GET_EXCHANGE_RATES_NEWS,
	});
	const paths = data.cities.map((slug) => {
		//TODO: withrouter options fix
		withRouter().locales.map((local) => {
			return {
				params: {
					slug: `${slug.id}`
				},
				locale: {
					local
				}
			}
		})
	});
	return { paths, fallback: false };
}
