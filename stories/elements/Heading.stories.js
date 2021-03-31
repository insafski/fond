import React from "react";

import Heading from "@/components/elements/Heading";
import { bool } from "prop-types";

export default {
	title: "Elements/Heading",
	component: Heading,
};

const Template = args => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
	type: "h1",
	className: "custom classNames",
	heading: {
		title: "Test",
		subtitle: "test",
		description: "test",
	},
	underline: bool,
};

export const H2 = Template.bind({});
H2.args = {
	type: "h2",
	className: "custom classNames",
	heading: {
		title: "Test2",
		subtitle: "test2",
		description: "test2",
	},
	underline: bool,
};
