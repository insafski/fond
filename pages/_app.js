import React from "react";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";

import ContextProvider from "../utils/contextProvider";
import Layout from "@/components/Layout";
import { client } from "../utils/apollo";

import "../styles/index.css";

function Application({ Component, pageProps }) {
	return (
		<ContextProvider>
			<Layout>
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
			</Layout>
		</ContextProvider>
	);
}

export default appWithTranslation(Application);
