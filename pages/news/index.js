import React from "react";
import { client } from "../../utils/apollo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { GET_EXCHANGE_RATES_NEWS } from "@/components/queries/queries.graphql";

export default function News({ data }) {

	const { t } = useTranslation("common");

	return (
		<>
			<div className={"testStyle"}>News</div>
			{t("change-locale")}
			{t("change-locale")}
			{t("change-locale")}
			{t("change-locale")}
			<ul>
				{data.map((item) => (
					<li>
						{item.page_title_short} -- {item.id}
					</li>
				))}
			</ul>
		</>
	);
}

export async function getStaticProps({locale}) {
	const { data } = await client.query({
		query: GET_EXCHANGE_RATES_NEWS,
	});

	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			data: data.cities,
		},
	};
}
