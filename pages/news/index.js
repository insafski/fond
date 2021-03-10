import Layout from "../../components/layout";
import { gql } from "@apollo/client";
import { client } from "../../utils/apollo";

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
	return (
		<Layout>
			<div className={"testStyle"}>News</div>
			<ul>
				{data.map((item) => (
					<li>{item.page_title_full} -- {item.id}</li>
				))}
			</ul>
		</Layout>
	);
}

export async function getStaticProps() {

	const { data } = await client.query({
		query: query,
	});
	return {
		props: {
			data: data.news,
		},
	};
}
