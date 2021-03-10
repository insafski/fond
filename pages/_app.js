import { appWithTranslation } from "next-i18next";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    HttpLink,
} from "@apollo/client";

import ApiContextProvider from "../utils/apiContextProvider";
import Layout from "../components/containers/Layout";

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
		<ApiContextProvider>
			<Layout>
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
			</Layout>
		</ApiContextProvider>
	);
};

export default appWithTranslation(MyApp);
