import React, { useReducer, useEffect } from "react";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";

import { PAGES } from "@/queries/queries.graphql";
import { NewsContextProvider } from "../context";

export default function NewsProvider({ children }) {
	const initialState = {
		isLoading: false,
		isError: false,
		errorMessage: "",
		news: [],
		locNews: false,
		location: "ru",
	};

	function reducer(state, { type, payload }) {
		switch (type) {
			case "loading":
				return {
					...state,
					isLoading: true,
				};
			case "error":
				return {
					...state,
					isError: !state.isError,
					errorMessage: payload.error,
				};
			case "gotNews":
				return {
					...state,
					news: [...state.news, ...payload.pages],
					isLoading: false,
				};
			case "loadLoc":
				return {
					...state,
					loading: true,
					locNews: true,
				};
			case "LocNews":
				return {
					...state,
					news: payload.pages,
					locNews: false,
					loading: false,
				};
			case "setLocation":
				return {
					...state,
					location: payload,
				};
			default:
				return initialState;
		}
	}

	const [newsContextState, dispatch] = useReducer(reducer, initialState);
	const { loading, error, data, fetchMore } = useQuery(PAGES);

	function loadMore() {
		console.log("bd is done to do moreFetch? ");
		// dispatch({ type: "loading" });
		// fetchMore({
		// 	variables: {
		// 		// TODO: add variables
		// 	},
		// });
	}

	function loadLocation(location) {
		dispatch({
			type: "loadLoc",
			payload: location,
		});
		fetchMore({
			variables: {
				// TODO: add loc parameters
			},
		});
	}

	function handleSetLocation(location) {
		dispatch({
			type: "setLocation",
			payload: location,
		});
	}

	function handleSetLocNews() {
		dispatch({
			type: "locNews",
		});
	}

	function handleSetLoad() {
		dispatch({ type: "loading" });
	}

	function handleSetError() {
		dispatch(
			{
				type: "error",
				payload: error,
			});
	}

	function handleSetNews() {
		dispatch(
			{
				type: "gotNews",
				payload: data,
			},
		);
	}

	const { isLoading, isError, news, locNews, errorMessage, location } = newsContextState;

	useEffect(() => {
		if (loading) {
			handleSetLoad();
		}
		if (error) {
			handleSetError();
		}
		if (data) {
			if (locNews) {
				handleSetLocNews();
			} else {
				handleSetNews();
			}
		}
	}, [loading, error, data]);

	return (
		<NewsContextProvider
			value={{
				isLoading,
				news,
				isError,
				loadMore,
				loadLocation,
				errorMessage,
				location,
				handleSetLocation,
			}}
		>
			{children}
		</NewsContextProvider>
	);
}

NewsProvider.propTypes = {
	children: PropTypes.node,
};
