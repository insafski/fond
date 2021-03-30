import React from "react";

import Loader from "@/components/elements/Loader";

export default {
	title: "Elements/Loader",
	component: Loader,
	argTypes: {
		size: {
			control: {
				type: "select",
				options: [
					"100vh",
					"50vh",
					"40vh",
					"30vh",
					"10vh",
					"5vh",
				],
			},
		},
	},
};

const Template = args => (
	<Loader {...args} />
);
export const Example = Template.bind({});
