import React, { useReducer } from "react";
import Dialog from "rc-dialog";
import get from "lodash/get";

import { useAppContext } from "../../../../../utils/contextProvider";
import { Input, Label, Button } from "@/components/elements/UI";

export default function Login() {
	const { state, dispatch } = useAppContext();

	const initialState = {
		email: "",
		password: "",
	};

	function RegisterReducer(state, { type, payload }) {
		switch (type) {
			case "email":
				return { ...state,
					email: payload };
			case "password":
				return { ...state,
					password: payload };
			case "clear":
				return { ...state,
					email: "",
					password: "" };
			default :
				return state;
		}
	}

	const [formState, setState] = useReducer(RegisterReducer, initialState);

	const forms = [
		{
			label: "Введите E-mail",
			id: "email",
			onChange: event => {
				setState({ type: "email",
					payload: event.target.value });
			},
			type: "text",
			value: formState.email,
		},
		{
			label: "Введите пароль",
			id: "email",
			onChange: event => {
				setState({ type: "password",
					payload: event.target.value });
			},
			type: "text",
			value: formState.password,
		},
	];

	function handleSend() {
		console.log(formState);
		setState({ type: "clear" });
	}

	function handleClose() {
		dispatch({ type: "login" });
		setState({ type: "clear" });
	}

	return (
		<Dialog title={"login"} visible={get(state, "loginForm", false)} onClose={() => dispatch({ type: "login" })}>
			<p>Login</p>
			{
				forms.map(item => {
					return (
						<>
							<Label htmlFor={item.id}>{item.label}</Label>
							<Input id={item.id} type={item.type} onChange={item.onChange} value={item.value}/>
						</>);
				})
			}
			<section>
				<Button onClick={handleClose}>Отмена</Button>
				<Button onClick={handleSend}>Войти</Button>
			</section>
		</Dialog>
	);
}
