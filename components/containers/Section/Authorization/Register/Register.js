import React, { useReducer } from "react";
import Dialog from "rc-dialog";

import { useAppContext } from "../../../../../utils/contextProvider";
import { Input, Label, Button } from "@/components/elements/UI";

export default function Register() {
	const { state, dispatch } = useAppContext();

	const initialState = {
		email: "",
		password: "",
		secondPassword: "",
	};

	function RegisterReducer(state, { type, payload }) {
		switch (type) {
			case "email":
				return { ...state,
					email: payload };
			case "password":
				return { ...state,
					password: payload };
			case "secondPassword":
				return { ...state,
					secondPassword: payload };
			case "clear":
				return { ...state,
					email: "",
					password: "",
					secondPassword: "" };
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
		{
			label: "Повторите пароль",
			id: "email",
			onChange: event => {
				setState({ type: "secondPassword",
					payload: event.target.value });
			},
			type: "text",
			value: formState.secondPassword,
		},
	];

	function handleSend() {
		console.log(formState);
		setState({ type: "clear" });
	}

	function handleClose() {
		dispatch({ type: "register" });
		setState({ type: "clear" });
	}

	return (
		<Dialog title={"register"} visible={state.registerForm} onClose={handleClose}>
			<p>Register</p>
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
				<Button onClick={handleSend}>Регистрация</Button>
			</section>
		</Dialog>
	);
}
