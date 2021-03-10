import { gql, useQuery } from "@apollo/client";
import get from "lodash/get";

import Layout from "../../components/layout";
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

	const { loading, error, data: fetchedData } = useQuery(GET_DOGS);

	if (loading) return "Loading...";
	if (error) return `Error! ${error.message}`;

	console.log(fetchedData)
	return (
		<Layout>
			<div className={"testStyle"}>{get(data.news[0], "page_title_full", "")}</div>
			<ul>
				{fetchedData.news.map((item) => <li>{item.type}</li>)}
			</ul>
		</Layout>
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

export async function getStaticProps({ params }) {
	const { data } = await client.query({
		query: contentQuery(params),
	});
	return {
		props: {
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
