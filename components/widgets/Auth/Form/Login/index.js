import Login from "./Login";

export default Login;


const configs = (form) => [
	{
		id: "email",
		label: "Введите свой имеил",
		rules: [{ required: true }, { type: "email" }],
		error: form.getFieldError('email'),
	},
	{
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
		error: form.getFieldError('password'),
	}
]
