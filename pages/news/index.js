import { gql } from "@apollo/client";
import { client } from "../../utils/apollo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const query = gql`
	query GetExchangeRates {
		news(limit: 10) {
			category_id
			page_title_full
			id
		}
	}
`;

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
						{item.page_title_full} -- {item.id}
					</li>
				))}
			</ul>
		</>
	);
}

export async function getStaticProps({locale}) {

	const { data } = await client.query({
		query: query,
	});
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			data: data.news,
		},
	};
}
