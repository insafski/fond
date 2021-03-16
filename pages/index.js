import React from "react";
import PropTypes from "prop-types";
import { gql } from "@apollo/client";
import { client } from "../utils/apollo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const query = gql`
	query GetExchangeRates {
		news(limit: 100) {
			category_id
			page_title_full
			id
		}
	}
`;

export default function Home({ data }) {
	const { t } = useTranslation("common");

	return (
		<>
			<div className={"testStyle"}>News</div>
			{t("change-locale")}
			{t("change-locale")}
			{t("change-locale")}
			{t("change-locale")}
			<ul>
				{
					data.map((item, idx) => (
						<li key={idx}>
							{item.page_title_full} -- {item.id}
						</li>
					))
				}
			</ul>
		</>
	);
}

Home.propTypes = {
	data: PropTypes.array,
};

Home.defaultProps = {
	data: [],
};

export async function getStaticProps({ locale }) {
	const { data } = await client.query({
		query,
	});

	return {
		props: {
			...await serverSideTranslations(locale, ["common"]),
			data: data.news,
		},
	};
}
