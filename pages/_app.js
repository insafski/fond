import React from "react";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";

import AuthProvider from "../components/widgets/Auth/provider";
import Layout from "@/components/Layout";
import { client } from "../utils/apollo";

import "../styles/index.css";

function Application({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Layout>
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
			</Layout>
		</AuthProvider>
	);
}

export default appWithTranslation(Application);
