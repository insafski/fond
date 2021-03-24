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
		subTitle: "test",
		subText: "test",
	},
	underline: bool,
};

export const H2 = Template.bind({});
H2.args = {
	type: "h2",
	className: "custom classNames",
	heading: {
		title: "Test2",
		subTitle: "test2",
		subText: "test2",
	},
	underline: bool,
};
