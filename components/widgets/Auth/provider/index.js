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

	function makeConfig(type) {
		switch (type) {
			case "register":
				return {
					title: "Регистрация",
					buttonLabel: "Регистрация",
					inputs: [
						{
							id: "email",
							label: "Введите свой email",
							rules: [{ required: true }, { type: "email" }],
							error(form) {
								return form.getFieldError("email");
							},
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
							error(form) {
								return form.getFieldError("password");
							},
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
											callback("Пароли не совпадают!!!");
										}
										callback();
									},
								}),
							],
							error(form) {
								return form.getFieldError("password2");
							},
						},
					],
				};
			case "login":
				return {
					title: "Авторизация",
					buttonLabel: "Войти",
					inputs: [
						{
							id: "email",
							label: "Введите свой email",
							rules: [{ required: true }, { type: "email" }],
							error(form) {
								return form.getFieldError("email");
							},
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
							error(form) {
								return form.getFieldError("password");
							},
						},
					],
				};
			default:
				return [];
		}
	}

	const { type, mousePosition, isVisible } = authFormState;

	return (
		<AuthContextProvider
			value={{
				authFormState,
				handleOpenRegister,
				handleOpenLogin,
				handleClose,
			}}
		>
			{
				type && createElement(
					Form,
					{
						mousePosition,
						isVisible,
						handleClose,
						onClose,
						makeConfig,
						type,
					},
					null,
				)
			}
			{children}
		</AuthContextProvider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.node,
};
