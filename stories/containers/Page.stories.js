import React from "react";

import Page from "@/components/containers/Page";
import ApolloWrapper from "@/utils/apollo";

export default {
	title: "Containers/Page",
	component: Page,
};

const Template = args => (
	<ApolloWrapper>
		<Page {...args} />
	</ApolloWrapper>)
;

export const Example = Template.bind({});
Example.args = {
	sections: [{
		component: "text", // news
		title: "test",
		subtitle: "test",
		description: "testing",
	}],
	metadata: {},
	preview: false,
	slug: "",
	heading: {
		title: "TEST",
		subTitle: "TEST",
		subText: "TEST",
	},
	mainPage: false,
	newsPage: false,
};

export const NewsPage = Template.bind({});
NewsPage.args = {
	sections: [{
		component: "news",
		title: "test",
		subtitle: "test",
		description: "testing",
	}],
	metadata: {},
	preview: false,
	slug: "",
	heading: {
		title: "TEST",
		subTitle: "TEST",
		subText: "TEST",
	},
	mainPage: true,
	newsPage: false,
};

export const MainPage = Template.bind({});
MainPage.args = {
	sections: [{
		component: "text", // news
		title: "test",
		subtitle: "test",
		description: "testing",
	}],
	metadata: {},
	preview: false,
	slug: "",
	heading: {
		title: "TEST",
		subTitle: "TEST",
		subText: "TEST",
	},
	mainPage: false,
	newsPage: true,
};
