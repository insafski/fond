import React from "react";
import Form from 'rc-field-form';

import { useAuthContext } from "@/components/widgets/Auth/context";
import { Button } from "@/components/elements/Form";
import { Input } from "@/components/elements/Form";
import Modal from "@/components/containers/Modal";

export default function Register({ isVisible, handleClose, mousePosition }) {
	const onFinish = values => {
    	console.log('Finish:', values);
	};

	return (
		<Modal
			title={"Регистрация"}
			visible={isVisible}
			onClose={handleClose}
			wrapClassName={"center"}
			style={{
				width: 600,
			}}
			footer={
				<>
					<Button onClick={handleClose}>Отмена</Button>
					<Button type="submit" onClick={onFinish}>Регистрация</Button>
				</>
			}
			mousePosition={mousePosition}
		>
			<Form style={{ padding: 16 }} onFinish={onFinish}>
				{(values, form) => {
					const emailError = form.getFieldError('email');
					const passwordError = form.getFieldError('password');
					const password2Error = form.getFieldError('password2');
					const errors = form.getFieldsError();
					if (errors) {
						console.log('Render with Errors:', values, form.getFieldsError());
					}

					const configs = [
						{
							id: "email",
							label: "Введите свой имеил",
							rules: [{ required: true }, { type: "email" }],
							error: emailError,
						}, {
							id: "password",
							label: "Введите пароль",
							rules: [
									{ required: true },
									context => ({
									validator(_, __, callback) {
										if (context.isFieldTouched('password2')) {
										context.validateFields(['password2']);
										callback();
										return;
										}
										callback();
									},
									}),
							],
							error: passwordError,
						}, {
							id: "password2",
							label: "Введите пароль повторно",
							rules: [

								{ required: true },
									context => ({
									validator(rule, value, callback) {
										const { password } = context.getFieldsValue(true);
										if (password !== value) {
											callback('Not Same as password1!!!');
										}
											callback();
									},
								}),
							],
							error: password2Error,
						}
					]

					return (
						<>
							{
								configs.map(({ id, label, rules, error }) => {
									return (
										<Input
											id={id}
											label={label}
											rules={rules}
											error={error}
										/>
									)
								})
							}
						</>
					);
				}}
			</Form>
		</Modal>
	)
}
