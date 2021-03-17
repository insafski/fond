import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
	link: new HttpLink({
		uri: process.env.HASURA_ENDPOINT,
		headers: {
			"x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
		},
	}),
	cache: new InMemoryCache(),
});

export default function ApolloWrapper(children) {
	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	);
}
