import React from "react";

import SocialNetworks from "@/components/elements/Social";

export default {
	title: "Elements/SocialNetworks",
	component: SocialNetworks,
};

const Template = args => (
	<SocialNetworks {...args} />
);
export const Example = Template.bind({});
Example.args = {
	className: "",
};
