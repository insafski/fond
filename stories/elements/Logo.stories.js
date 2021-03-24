import React from "react";

import Logo from "@/components/elements/Logo";

export default {
	title: "Elements/Logo",
	component: Logo,
	argTypes: {
		type: {
			control: {
				type: "select",
				options: [
					"header",
					"footer",
				],
			},
		},
	},
};

const Template = args => <Logo {...args} />;

export const Example = Template.bind({});
Example.args = {
	className: "",
	classNameLogo: {},
};
