import React from "react";
import Form from 'rc-field-form';

import { useAuthContext } from "@/components/widgets/Auth/context";
import { Button } from "@/components/elements/Form";
import { Input } from "@/components/elements/Form";
import Modal from "@/components/containers/Modal";
import { configs } from "eslint-plugin-prettier";

export default function Register({ isVisible, handleClose, mousePosition, configs, type }) {
	const onFinish = values => {
    	console.log('Finish:', values);
	};

	return (
		<Modal
			title={ type === "register" ? "Регистрация" : "Авторизация"}
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
					const errors = form.getFieldsError();
					if (errors) {
						console.log('Render with Errors:', values, form.getFieldsError());
					}

					return (
						<>
							{
								configs(type, form).map(({ id, label, rules, error }) => {
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
