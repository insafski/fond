import React from "react";

import Icon from "@/components/elements/Icon";

export default {
	title: "Elements/Icon",
	component: Icon,
	argTypes: {
		type: {
			control: {
				type: "select",
				options: [
					"down-open",
					"left-open",
					"right-open",
					"up-open",
					"down-open-mini",
					"left-open-mini",
					"right-open-mini",
					"up-open-mini",
					"down-open-big",
					"left-open-big",
					"right-open-big",
					"up-open-big",
					"eye",
					"eye-off",
					"search",
					"user",
					"vk",
					"youtube",
					"facebook",
					"instagram",
					"twitter",
					"cancel",
					"logo",
				],
			},
		},
	},
};

const Template = args => <Icon {...args} />;

export const Example = Template.bind({});
Example.args = {
	className: "",
	style: {},
};
