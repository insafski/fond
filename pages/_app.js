import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    HttpLink,
} from "@apollo/client";

import Layout from "../components/containers/Layout";
import { appWithTranslation } from "next-i18next";
import "../styles/index.css";

const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://gql-test.serafim.help/v1/graphql",
        headers: {
            "x-hasura-admin-secret": "password-for-hasura-test",
        },
    }),
    cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps, t }) => {
	return (
		<Layout>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Layout>
	);
};

export default appWithTranslation(MyApp);
