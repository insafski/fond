import React from "react";

import Picture from "@/components/elements/Picture";

export default {
	title: "Elements/Picture",
	component: Picture,
};

const Template = args => <Picture {...args} />;

export const Image = Template.bind({});

Image.args = {
	items: [
		{
			alt: "Альтернативный текст",
			src: "https://storage.yandexcloud.net/serafim-uploads/content/2021/03/25/9cd303ee44f38ebe2b1cd4de7a5d3160_583c0e02-932b-460f-9be9-2dc2653dff9c_7e6192b4-510e-405b-aa68-8020d13f153a.jpg",
			title: "Изображение новости",
			breakpoint: "sm",
		},
		{
			alt: "Альт текст",
			src: "https://storage.yandexcloud.net/serafim-uploads/content/2021/03/25/8Xfvwgpq_400x400_cd48d235-87ce-4b0f-8021-20826f4e39e3.jpeg",
			title: "Второе изображение",
			breakpoint: "md",
		},
		{
			alt: "uihiuh",
			src: "https://storage.yandexcloud.net/serafim-uploads/content/2021/03/25/1500x500_21b5a894-1064-4c6f-814c-8b075c1c3509.jpeg",
			title: "kopo",
			breakpoint: "main",
		},
	],
};
