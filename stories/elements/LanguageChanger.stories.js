import React from "react";

import LanguageChanger from "@/components/elements/LanguageChanger";

export default {
	title: "Elements/LanguageChanger",
	component: LanguageChanger,
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

const Template = args => (
	<LanguageChanger {...args} />
);
export const Example = Template.bind({});
