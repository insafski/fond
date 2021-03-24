import React from "react";

import NewsItem from "@/components/elements/ListElement/NewsItem";

export default {
	title: "Elements/NewsItem",
	component: NewsItem,
};

const Template = args => (
	<NewsItem {...args} />
);
export const Example = Template.bind({});
Example.args = {
	heading: {
		title: "Test",
		description: "test",
	},
	categories: "test",
	country: "test",
	date: "12.01.21",
	picture: [{ src: "https://miro.medium.com/max/1838/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" }],
};
