import React from "react";
import Form from "rc-field-form";
import PropTypes from "prop-types";
import get from "lodash/get";

import { Button } from "@/components/elements/Form";
import { Input } from "@/components/elements/Form";
import Modal from "@/components/containers/Modal";

export default function FormMaker({ isVisible, handleClose, mousePosition, makeConfig, type }) {
	const config = makeConfig(type);

	const inputs = get(config, "inputs", []);
	const title = get(config, "title", "");

	function handleSubmit(values) {
		console.info({ values });
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
				<>
					<Button
						onClick={handleClose}
					>
						Отмена
					</Button>
					<Button
						type={"submit"}
					>
						{config.buttonLabel}
					</Button>
				</>
			}
			mousePosition={mousePosition}
		>
			<Form style={{ padding: 16 }} onFinish={handleSubmit}>
				{
					(values, form) => {
						const errors = form.getFieldsError();

						if (errors) {
							console.log("Render with Errors:", values, form.getFieldsError());
						}

						return inputs.map(({ id, label, rules, error }, idx) => {
							return (
								<Input
									key={`${idx}-${id}`}
									id={id}
									label={label}
									rules={rules}
									error={error(form)}
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
