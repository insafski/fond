import React, { createElement, useReducer } from "react";
import PropTypes from "prop-types";

import { SearchContextProvider } from "../context";
import SearchModal from "../SearchModal";

export default function SearchProvider({ children }) {
	const initialState = {
		isVisible: false,
		searchValue: "",
		createModal: false,
		mousePosition: {
			x: null,
			y: null,
		},
	};

	const reducer = (state, { type, payload }) => {
		switch (type) {
			case "open":
				return {
					...state,
					createModal: true,
					isVisible: true,
					mousePosition: payload.mousePosition,
				};
			case "close":
				return {
					...state,
					isVisible: false,
					searchValue: "",
				};
			case "typing":
				return {
					...state,
					searchValue: payload.searchValue,
				};
			default:
				return state;
		}
	};

	const [searchModalState, dispatch] = useReducer(reducer, initialState);

	function openSearchModal({ pageX, pageY }) {
		dispatch({
			type: "open",
			payload: {
				mousePosition: {
					x: pageX,
					y: pageY,
				},
			},
		});
	}

	async function closeSearchModal() {
		await dispatch({
			type: "close",
		});
		dispatch({});
	}

	function changeSearchForm({ target: { value } }) {
		dispatch({
			type: "typing",
			payload: value,
		});
	}

	const { mousePosition, isVisible, searchValue, createModal } = searchModalState;

	return (
		<SearchContextProvider
			value={{
				searchModalState,
				openSearchModal,
				closeSearchModal,
				changeSearchForm,
			}}
		>
			{
				createModal && createElement(
					SearchModal,
					{
						mousePosition,
						isVisible,
						searchValue,
						closeSearchModal,
						changeSearchForm,
					},
					null,
				)
			}
			{children}
		</SearchContextProvider>
	);
}

SearchProvider.propTypes = {
	children: PropTypes.node,
};

