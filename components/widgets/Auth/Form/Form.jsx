/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import Form from "@/components/containers/Form";

import { Button, Input } from "@/components/elements/Form";
import Modal from "@/components/containers/Modal";

export default function FormMaker({ isVisible, handleClose, mousePosition, makeConfig, type }) {
	const [formValue, setFormValue] = useState({});
	const [error, setError] = useState(true);

	const config = makeConfig(type);

	const inputs = get(config, "inputs", []);
	const title = get(config, "title", "");

	function handleValidate(errors, values) {
		const hasError = errors.some(item => item.errors.length);

		setError(hasError || !Object.keys(values).length);
	}

	function handleSubmit() {
		if (error) {
			console.info(error);
		}

		console.log(formValue);
	}

	return (
		<Modal
			title={title}
			visible={isVisible}
			onClose={handleClose}
			wrapClassName={"center"}
			style={{
				width: 600,
			}}
			footer={
				<div style={{
					display: "flex",
					justifyContent: "space-between",
				}}>
					<Button
						onClick={handleClose}
					>
						Отмена
					</Button>
					<Button
						type={"submit"}
						onClick={handleSubmit}
						disabled={error}
					>
						{config.buttonLabel}
					</Button>
				</div>
			}
			mousePosition={mousePosition}
		>
			<Form
				onFinish={handleSubmit}
				onValuesChange={(_, values) => setFormValue(values)}
			>
				{
					(values, form) => {
						const errors = form.getFieldsError();
						handleValidate(errors, values);

						return inputs.map(({ id, label, rules, error }, idx) => {
							return (
								<Input
									key={`${idx}-${id}`}
									id={id}
									label={label}
									rules={rules}
									error={error(form)}
									last={inputs.length - 1 === idx}
								/>
							);
						});
					}
				}
			</Form>
		</Modal>
	);
}

FormMaker.propTypes = {
	isVisible: PropTypes.bool,
	handleClose: PropTypes.func,
	mousePosition: PropTypes.object,
	makeConfig: PropTypes.func,
	type: PropTypes.string,
	textConfigs: PropTypes.func,
	handleSubmit: PropTypes.func,
};

FormMaker.defaultProps = {
	isVisible: false,
	handleClose: () => Function,
	mousePosition: {
		x: null,
		y: null,
	},
	makeConfig: () => Function,
	type: "",
	textConfigs: () => Function,
	handleSubmit: () => Function,
};
