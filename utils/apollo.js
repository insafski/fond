import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
	link: new HttpLink({
		uri: "https://gql-test.serafim.help/v1/graphql",
		headers: {
			"x-hasura-admin-secret": "password-for-hasura-test",
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
