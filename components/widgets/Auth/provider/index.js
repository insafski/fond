import React, { createElement, useReducer } from "react";
import PropTypes from "prop-types";

import { AuthContextProvider } from "../context";
import Form from "../Form";

export default function AuthProvider({ children }) {
	const initialState = {
		type: null,
		isVisible: false,
		mousePosition: {
			x: null,
			y: null,
		}
	};

	function reducer(state, { type, payload }) {
		switch (type) {
			case "open":
				return {
					...state,
					type: payload.type,
					mousePosition: payload.mousePosition,
					isVisible: true,
				};
			case "close":
				return {
					...state,
					isVisible: false
				};
			default:
				return initialState;
		}
	}

	const [authFormState, dispatch] = useReducer(reducer, initialState);

	function handleClose() {
		toggle(false);
	}

	function handleOpenRegister(event) {
		dispatch({
			type: "open",
			payload: {
				type: "register",
				mousePosition: {
					x: event.pageX,
					y: event.pageY,
				}
			},
		});
	}

	function handleOpenLogin(event) {
		dispatch({
			type: "open",
			payload: {
				type: "login",
				mousePosition: {
					x: event.pageX,
					y: event.pageY,
				}
			},
		});
	}

	function handleClose() {
		dispatch({type: "close"});
	};

	function onClose() {
		dispatch({});
	}

	const { type, mousePosition, isVisible } = authFormState;

	return (
		<AuthContextProvider
			value={{
				authFormState,
				handleOpenRegister,
				handleOpenLogin,
				handleClose
			}}
		>
			{type && createElement(Form.get(type), { mousePosition, isVisible, handleClose, onClose }, null)}
			{children}
		</AuthContextProvider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.node,
};
