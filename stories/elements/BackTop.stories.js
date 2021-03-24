import React from "react";

import BackTop from "@/components/elements/BackTop";

export default {
	title: "Elements/BackTop",
	component: BackTop,
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

const Template = args => (
	<div>
		<BackTop {...args} />
		<div style={{ margin: "10rem" }}>Ниже</div>
		<div style={{ margin: "10rem" }}>Ниже</div>
		<div style={{ margin: "10rem" }}>Ниже</div>
		<div style={{ margin: "10rem" }}>Ниже</div>
		<div style={{ margin: "10rem" }}>Ниже</div>
		<div style={{ margin: "10rem" }}>Ниже</div>
		<div style={{ margin: "10rem" }}>Ниже</div>
		<div style={{ margin: "10rem" }}>что смотришь? Мотай давай</div>
		<div style={{ margin: "10rem" }}>ещё</div>
		<div style={{ margin: "10rem" }}>ещё</div>
		<div style={{ margin: "10rem" }}>ещё Ниже</div>
		<div style={{ margin: "10rem" }}>Стой</div>
	</div>
);
export const Example = Template.bind({});
