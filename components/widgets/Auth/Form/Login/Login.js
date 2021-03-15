import React from "react";
import Form from 'rc-field-form';

import { Button } from "@/components/elements/Form";
import { Input } from "@/components/elements/Form";
import Modal from "@/components/containers/Modal";

export default function Login({ isVisible, handleClose, mousePosition, configs }) {
	const onFinish = values => {
    	console.log(values);
	};

	return (
		<Modal
			title={"Авторизация"}
			visible={isVisible}
			onClose={handleClose}
			wrapClassName={"center"}
			style={{
				width: 600,
			}}
			footer={
				<>
					<Button onClick={handleClose}>Отмена</Button>
					<Button type="submit" onClick={onFinish}>Вход</Button>
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
								configs(form).map(({id, label, rules, error}) => {
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
