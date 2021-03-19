import React from "react";
import { appWithTranslation } from "next-i18next";
import { ApolloProvider } from "@apollo/client";
import PropTypes from "prop-types";

import AuthProvider from "../components/widgets/Auth/provider";
import Layout from "@/components/Layout";
import { client } from "../utils/apollo";

import "@/styles/fonts/fontello/css/hm-icons.css";
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

Application.propTypes = {
	Component: PropTypes.node,
	pageProps: PropTypes.object,
};

Application.defaultProps = {
	Component: () => Function,
	pageProps: {},
};

export default appWithTranslation(Application);
