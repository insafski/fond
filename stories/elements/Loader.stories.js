import React from "react";

import Loader from "@/components/elements/Loader";

export default {
	title: "Elements/Loader",
	component: Loader,
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

const Template = args => (
	<Loader {...args} />
);
export const Example = Template.bind({});
