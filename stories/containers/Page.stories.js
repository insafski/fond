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

const items = [
	{
		alt: "Альтернативный текст",
		src: "https://images.wallpaperscraft.ru/image/kosmonavt_koltso_neon_156673_1920x1080.jpg",
		title: "Изображение новости",
		breakpoint: "sm",
	},
	{
		alt: "Альт текст",
		src: "https://images.wallpaperscraft.ru/image/kosmonavt_koltso_neon_156673_1920x1080.jpg",
		title: "Второе изображение",
		breakpoint: "md",
	},
	{
		alt: "uihiuh",
		src: "https://images.wallpaperscraft.ru/image/kosmonavt_koltso_neon_156673_1920x1080.jpg",
		title: "kopo",
		breakpoint: "main",
	},
];

export const DetailedNewsPage = Template.bind({});
DetailedNewsPage.args = {
	sections: [{
		component: "detailed_news", // news
		main_picture: items,
		title: "test",
		subtitle: "test",
		description: "testing",
		country: "test",
		category: "test",
		created_date: "02.00.00",
		original_lang: "test",
	}],
	metadata: {},
	preview: false,
	slug: "",
	mainPage: false,
	newsPage: false,
	detailedNews: true,
};
