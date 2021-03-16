import React, { createElement, useReducer } from "react";
import PropTypes from "prop-types";

import { AuthContextProvider } from "../context";
import FormMaker from "../FormMaker";

export default function AuthProvider({ children }) {
	const initialState = {
		type: null,
		isVisible: false,
		mousePosition: {
			x: null,
			y: null,
		},
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
					isVisible: false,
				};
			default:
				return initialState;
		}
	}

	const [authFormState, dispatch] = useReducer(reducer, initialState);

	function handleOpenRegister(event) {
		dispatch({
			type: "open",
			payload: {
				type: "register",
				mousePosition: {
					x: event.pageX,
					y: event.pageY,
				},
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
				},
			},
		});
	}

	function handleClose() {
		dispatch({ type: "close" });
	}

	function onClose() {
		dispatch({});
	}

	function handleSubmit(options) {
		console.log(options);
	}

	function configs(configType, form) {
		switch (configType) {
			case "register":
				return [
				{
					id: "email",
					label: "Введите свой имеил",
					rules: [{ required: true }, { type: "email" }],
					error: form.getFieldError("email"),
				},
				{
					id: "password",
					label: "Введите пароль",
					rules: [
						{ required: true },
						context => ({
							validator(_, __, callback) {
								if (context.isFieldTouched("password2")) {
									context.validateFields(["password2"]);
									callback();

									return;
								}
								callback();
							},
						}),
					],
					error: form.getFieldError("password"),
				},
				{
					id: "password2",
					label: "Введите пароль повторно",
					rules: [

						{ required: true },
						context => ({
							validator(rule, value, callback) {
								const { password } = context.getFieldsValue(true);
								if (password !== value) {
									callback("Not Same as password1!!!");
								}
								callback();
							},
						}),
					],
					error: form.getFieldError("password2"),
				},
			];
			case "login":
				return [
			{
				id: "email",
				label: "Введите свой имеил",
				rules: [{ required: true }, { type: "email" }],
				error: form.getFieldError("email"),
			},
			{
				id: "password",
				label: "Введите пароль",
				rules: [
					{ required: true },
					context => ({
						validator(_, __, callback) {
							if (context.isFieldTouched("password2")) {
								context.validateFields(["password2"]);
								callback();

								return;
							}
							callback();
						},
					}),
				],
				error: form.getFieldError("password"),
			},
		];
			default:
				return
		}
	}

	function textConfigs(configType) {
		if (configType === "register") {
			return {
				label: "Регистрация",
				buttonLabel: "Регистрация",
			};
		}

		return {
			label: "Авторизация",
			buttonLabel: "Войти",
		};
	}

	const { type, mousePosition, isVisible } = authFormState;

	return (
		<AuthContextProvider
			value={{
				authFormState,
				handleOpenRegister,
				handleOpenLogin,
				handleClose,
				handleSubmit
			}}
		>
			{type && createElement(FormMaker, { mousePosition,
				isVisible,
				handleClose,
				onClose,
				configs,
				type,
				textConfigs,
				handleSubmit}, null)}
			{children}
		</AuthContextProvider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.node,
};
